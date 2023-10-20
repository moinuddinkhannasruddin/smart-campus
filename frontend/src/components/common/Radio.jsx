import * as React from 'react';
import MRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { InputLabel } from '@mui/material';

const Radio = (props) => {
    const { labelSx, label, name, value, options, handleChange,group, } = props;
    

    return (
        <div>
            <InputLabel sx={{ ...labelSx, fontSize: "16px" }}>{label}</InputLabel>

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {
                    options.map((item, idx) => {
                        const { radioValue, label } = item
                        return (
                            <FormControlLabel
                                key={`radio_${idx}`}
                                value={radioValue}
                                control={<MRadio
                                    // checked={value === radioValue}
                                    onChange={(e) => handleChange({ name, value: e.target.value,group })}

                                />}
                                label={<span style={{ fontSize: '20px' }}>{label}</span>} 
                            />

                        )
                    })
                }

            </RadioGroup>
        </div>
    );
}

export default Radio;
