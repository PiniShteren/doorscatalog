import React from 'react';
import "./contect.css";
import { TextField, TextareaAutosize } from '@material-ui/core';

export default function Contect() {
      return (
            <div className="contect">
                  <div>
                        <form>
                              <TextField label="שם מלא" />
                              <TextField label="אימייל" />
                              <TextField label="נושא" />
                              <TextareaAutosize />
                        </form>
                  </div>
            </div>
      )
}
