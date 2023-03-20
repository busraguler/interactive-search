import * as React from "react";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const ListItem = ({ name, phone, mail, policy }) => {
  if (policy) {
    return (
      <div className="policy">
        <InsertDriveFileIcon />
        <Typography>{policy}</Typography>
      </div>
    );
  } else {
    return (
      <>
        <Typography className="title">{name}</Typography>
        <div className="contact">
          <PhoneIcon />
          <Typography>{phone}</Typography>
          <Typography>{mail}</Typography>
        </div>
      </>
    );
  }
};

export default ListItem;
