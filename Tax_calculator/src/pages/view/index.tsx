import React from 'react';
import Card from "../../components/card";
import Button from "../../components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faDownload} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../../components/searchbar";
import DataTable from 'react-data-table-component';
import {Link} from "react-router-dom";
import Modal from "../../components/modal";
import { toast } from 'react-toastify';

export interface dataProps {
    name: string;
    lgnm: string;
    gstin: string;
    gstRegType: string;
    rgdt: string;
}

const ViewPage = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleDelete = () => {
        setIsOpen(false);
        // API call to delete
        toast.success("Deleted successfully !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const columns = [
        {
            name: 'Legal Name',
            selector: (row: { lgnm: any; }) => row.lgnm,
        },
        {
            name: 'Trade Name',
            selector: (row: { name: any; }) => row.name,
        },
        {
            name: 'GST Number',
            selector: (row: { gstin: any; }) => row.gstin,
        },
        {
            name: 'Gst Type',
            selector: (row: { gstRegType: any; }) => row.gstRegType,
        },
        {
            name: 'Registration Date',
            selector: (row: { rgdt: any; }) => row.rgdt,
        },
        {
            name: 'Delete',
            selector: () => <FontAwesomeIcon icon={faTrashCan} size={'1x'} className="cursor-pointer" onClick={() => setIsOpen(true)}/>,
        }

    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '62px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',

            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([{
        name: '',
        lgnm: '',
        gstin: '',
        gstRegType: '',
        rgdt: '',
    }]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("https://test1.taxadda.com/api/gstin/?skip=0&limit=20&download=true&searchText&tags[]=628df7b40fedcce4178cb227&type=regular&user=prateek@test.com")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.gstin);
                },
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div>
            <div className="m-10">
                <div className="text-4xl font-semibold">All GSTINs</div>
                <div className="w-full flex justify-between mt-10">
                    <Link to="/add"><Button>Add GSTIN</Button></Link>
                    <Searchbar/> {/* add onSearch parameter and add a function to call api for searching*/}
                    <Button><FontAwesomeIcon icon={faDownload} className="mt-1"/>Export as XLSX</Button>
                </div>
                <div>
                    <Card className="mt-10">
                        <div>
                            <DataTable
                                columns={columns}
                                data={items}
                                highlightOnHover={true}
                                customStyles={customStyles}
                                pagination={true}
                            />
                        </div>
                    </Card>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-2xl font-semibold">Delete GSTIN</div>
                <div className="text-lg mt-5">Are you sure you want to delete this GSTIN?</div>
                <div className="flex justify-end mt-10">
                    <Button className="mr-5" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button className="bg-red-500" onClick={() => {handleDelete()}}>Delete</Button>
                </div>
            </Modal>
        </div>
    );
}

export default ViewPage;