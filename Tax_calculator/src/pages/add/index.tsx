import React from 'react';
import Card from "../../components/card";
import LabelTextInput from "../../components/labelTextInput";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import Modal from "../../components/modal";
import TagsInput from "../../components/tagInput";
import {toast} from "react-toastify";
import  { useNavigate } from 'react-router-dom'


const AddPage = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = React.useState(false);

    const handleAdd = () => {
        setIsOpen(false);
        // API call to add
        toast.success("Tags Added !", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const handleSave = () => {
        // API call to save
        toast.success("Saved !", {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    }

    return (
        <div className="flex flex-row h-full">
            <div className="w-1/3 pl-10 pt-5 items-center">
                    <div className="">
                        <div className="mb-8">
                            <div className="text-xl font-bold m-2">Add Client</div>
                            <div className="m-2">
                                Enter the Gst number of the client.<br/>
                                You can add GST number which has GST type as Regular and Composition.
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="text-xl font-bold m-2">Here are your Plan details</div>
                            <div className="m-2">
                                Available GSTIN credits - 319 <br/>
                                Expiry date - 31st March 2021<br/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="w-2/3 h-full">
                <Card className="m-5">
                    <div className="p-10 align-middle h-full">
                        <LabelTextInput label="Enter one or more GSTIN to import" type="text" className="mt-10" placeholder="Enter GSTIN numbers"/>
                        <Dropdown
                            label="Select Tag"
                            className="mt-10"
                            placeholder="Showing All Tags"
                            items={[{"name": "sample"},{"name": "URLs"}]}
                            hasButton={true}
                            buttonText="Add +"
                            onButtonClick={() => {setIsOpen(true)}}
                        />
                        <div className="mt-10">
                            Paste all the client GSTIN in the box which you like to import. Each GSTIN should be in a new line.<br/>
                            QRMP prefrences along with GST return status from Jan 2021 till date will be imported automatically.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button className='m-2' onClick={handleSave}>
                            Save Multiple GSTIN
                        </Button>
                    </div>
                </Card>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-2xl font-semibold">Add Tags</div>
                <div className="text-lg mt-5"><TagsInput/></div>
                <div className="flex justify-end mt-10">
                    <Button className="mr-5" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button className="bg-red-500" onClick={() => {handleAdd()}}>Add</Button>
                </div>
            </Modal>
        </div>
    );
}

export default AddPage;