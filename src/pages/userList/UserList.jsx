import './userList.css'
import * as React from 'react';
import {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const userColumns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
                return (
                    <div className={'userListUser'}>
                        <img src={params.row.avatar} alt=""
                             className={'userListImg'}/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {field: 'email', headerName: 'Email', width: 200},
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        }, {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 115,
            renderCell: (params => {
                return (
                    <>
                        <Link to={'/users/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className={'userListDelete'} onClick={() =>
                            handleDelete(params.row.id)}/>
                    </>
                )
            })
        },


    ];

    return (
        <div className={'userList'}>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={userColumns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
