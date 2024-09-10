import { Button, List, ListItem } from "@mui/material";
import Link from "next/link";
import React from "react";

const Submenus = () => {
  return (
    <>
      <h1>My main page</h1>
      <List>
        {/* Button 1: Navigate to /submenus/dashboard */}
        <ListItem>
          <Link href="/submenus/dashboard" passHref>
            <Button variant="contained" color="primary">
              Go to Dashboard
            </Button>
          </Link>
        </ListItem>

        {/* Button 2: Navigate to /submenus/profile */}
        <ListItem>
          <Link href="/submenus/profile" passHref>
            <Button variant="contained" color="secondary">
              Go to Profile
            </Button>
          </Link>
        </ListItem>

        {/* Button 3: Navigate to /submenus/settings */}
        <ListItem>
          <Link href="/submenus/settings" passHref>
            <Button variant="contained" color="success">
              Go to Settings
            </Button>
          </Link>
        </ListItem>

        {/* Button 4: Navigate to /submenus/help */}
        <ListItem>
          <Link href="/submenus/help" passHref>
            <Button variant="contained" color="error">
              Go to Help
            </Button>
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Submenus;
