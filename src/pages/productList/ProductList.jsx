import React, {useState} from 'react';
import './productList.css'
import {DataGrid} from "@mui/x-data-grid";
import {productRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";

function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const productColumns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className={'productListItem'}>
                        <img src={params.row.img} alt=""
                             className={'productListImg'}/>
                        {params.row.name}
                    </div>
                )
            }
        },
        {field: 'stock', headerName: 'Stock', width: 200},
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        }, {
            field: 'price',
            headerName: 'Price',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 115,
            renderCell: (params => {
                return (
                    <>
                        <Link to={'/products/' + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className={'productListDelete'} onClick={() =>
                            handleDelete(params.row.id)}/>
                    </>
                )
            })
        },


    ];

    return (
        <div className={'productList'}>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={productColumns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default ProductList;