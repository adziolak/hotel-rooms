import type { FC } from "react";
import { createPortal } from "react-dom";
import { Dropdown, Button } from "@restart/ui";
import type { DropdownProps } from "@restart/ui/Dropdown";
import IconCaretBottom from "icons/IconCaretBottom";
import RoomItem from "./RoomItem";
import classNames from "classnames";
import { Room } from "../typings"; 

interface Props extends Omit<DropdownProps, "children"> {
    rooms: Room[];
    loading?: boolean;
    disabled?: boolean;
    title: string;
    element: Element | null;
    onRoomSelect: (room: Room) => void;
}

const RoomsDropdown: FC<Props> = ({
    rooms,
    loading,
    disabled,
    element,
    title,
    show,    
    onToggle,
    onRoomSelect
}) => {

  const handleSelect = (room: Room) => {
    onRoomSelect(room);
  }  

  return (
    <Dropdown
        show={show}
        onToggle={onToggle}
    >
        <>
            <Dropdown.Toggle>
                {(props) => (
                    <Button 
                        type="button" 
                        {...props} 
                        disabled={disabled || loading} 
                        className="pl-4 w-full text-left font-semibold flex justify-between items-center relative"
                        >
                        <span className="text-purple-900 opacity-75">{title}</span>
                        <IconCaretBottom width={16} className="text-gray-900" />
                    </Button>
                )}                
            </Dropdown.Toggle>
            <Dropdown.Menu offset={[0, 12]}>
                {(_, { show }) => 
                    element && createPortal(
                        <div className={classNames(
                            show ? "flex" : "hidden",
                            "px-4 pt-6 shadow-lg border-grey-200 bg-white z-10 w-full absolute top-full -mt-5 rounded-b-3xl")
                        }>
                            <div className="overflow-y-auto max-h-80 w-full flex flex-col">
                                {rooms.map(room => 
                                    <Dropdown.Item className="py-2 border-solid border-indigo-100/75 border-b" key={room.id} onClick={() => handleSelect(room)}>
                                        <RoomItem {...room} />
                                    </Dropdown.Item>
                                )} 
                            </div>
                        </div>,
                        element
                    )
                }            
            </Dropdown.Menu>
        </>
    </Dropdown>
  );
};

RoomsDropdown.displayName = "RoomsDropdown";

export default RoomsDropdown;