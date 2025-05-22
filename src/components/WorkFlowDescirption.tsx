import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { X } from 'lucide-react';
import React from "react";

export function WorkFlowsDialogue({ 
    open, 
    handleOpen, 
    title,
    desc,
    image,
}) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} className="bg-primary-light">
        <DialogHeader className="justify-between">
          <h1 className="text-xl font-semibold text-accent">
            {title}
          </h1>
          <IconButton
            color="white"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <X/>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-scroll h-[80vh]">
            <div>
            <div className="w-full">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <h2 className="text-2xl font-bold my-3">Description</h2>
                <p  className="text-gray-300">
                    {desc.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            </div>
            
        </DialogBody>
      </Dialog>
    </>
  );
}
