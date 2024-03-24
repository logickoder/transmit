import React from "react";
import {DropdownField, FormField} from "./InputField.tsx";
import {Scanner} from '@yudiel/react-qr-scanner';
import Button from "./Button.tsx";

export default function TransitForm() {
    const [userLocation, setUserLocation] = React.useState("");
    const [adminLocation, setAdminLocation] = React.useState("");
    const [qrCode, setQrCode] = React.useState("");
    const [userWallet, setUserWallet] = React.useState("");
    const [packageValue, setPackageValue] = React.useState("");
    const [packageNature, setPackageNature] = React.useState("");
    const [checkPointLocation, setCheckpointLocation] = React.useState("");
    const [checkPointWallet, setCheckpointWallet] = React.useState("");
    const [transportationMode, setTransportationMode] = React.useState("");

    const [showQrCode, setShowQrCode] = React.useState(false);

    const transportationModes = [
        "Bike",
        "Car",
        "Truck",
        "Van",
        "Boat",
        "Plane",
        "Train",
        "Bus",
        "Motorcycle",
        "Foot",
    ]

    const toggleQrCode = () => {
        setShowQrCode(!showQrCode);
    }

    return (
        <>
            {
                showQrCode ? (
                    <Scanner
                        onError={(error) => console.log(error?.message)}
                        onResult={setQrCode}/>
                ) : (
                    <form
                        id="transit-form"
                        className="flex flex-col gap-4 mx-8 my-4 h-full overflow-y-auto"
                    >
                        <FormField
                            label="User Location"
                            placeholder="38, Ogunlana Drive, Surulere, Lagos"
                            value={userLocation}
                            onChange={setUserLocation}
                        />

                        <FormField
                            label="Admin Location"
                            placeholder="38, Ogunlana Drive, Surulere, Lagos"
                            value={adminLocation}
                            onChange={setAdminLocation}
                        />

                        <FormField
                            label="Qr Code"
                            value={qrCode}
                            onChange={setQrCode}
                            onClick={toggleQrCode}
                            readOnly
                        />

                        <FormField
                            label="User Wallet"
                            placeholder="0x1234567890"
                            value={userWallet}
                            onChange={setUserWallet}
                        />

                        <FormField
                            label="Package"
                            placeholder="Box, Envelope, etc."
                            value={packageValue}
                            onChange={setPackageValue}
                        />

                        <FormField
                            label="Package Nature"
                            placeholder="Box, Envelope, etc."
                            value={packageNature}
                            onChange={setPackageNature}
                        />


                        <FormField
                            label="Checkpoint Location"
                            placeholder="38, Ogunlana Drive, Surulere, Lagos"
                            value={checkPointLocation}
                            onChange={setCheckpointLocation}
                        />

                        <FormField
                            label="Checkpoint Wallet"
                            placeholder="0x1234567890"
                            value={checkPointWallet}
                            onChange={setCheckpointWallet}
                        />

                        <DropdownField
                            value={transportationMode}
                            label="Mode of Transportation"
                            options={transportationModes}
                            onChange={setTransportationMode}
                        />

                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </form>
                )
            }
        </>
    );
}