import './userList.css'
import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";

const columns = [
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
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className={'userListDelete'}/>
                </>
            )
        })
    },


];

const rows = [
    {
        id: 1,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 2,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 3,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 4,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 5,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 6,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 7,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 8,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 9,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 10,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    }, {
        id: 11,
        username: 'John',
        avatar: 'https://image.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-768.jpg',
        email: 'john@gmail.com',
        status: 'active',
        transaction: '$120'

    },
];

export default function UserList() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
