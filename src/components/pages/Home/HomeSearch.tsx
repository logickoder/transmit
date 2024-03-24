import InputField from "../../organisms/InputField.tsx";
import {AiOutlineSearch} from "react-icons/ai";
import {useState} from "react";

export default function HomeSearch() {
    const [value, setValue] = useState("");

    return (
        <div className="flex justify-center items-center gap-4 m-8">
            <div className="flex-1">
                <InputField
                    id="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    type="text"
                />
            </div>
            <div className="bg-purple-500 p-3 rounded-md cursor-pointer">
                <AiOutlineSearch color="white"/>
            </div>
        </div>
    );

}