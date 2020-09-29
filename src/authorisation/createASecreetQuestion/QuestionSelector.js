import React from 'react';
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const QuestionSelectorComponent=styled.div`
    height:30%;
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Span=styled.span`
    font-family:Proxima Nova Light;
    font-size:20px;
    color:rgba(0, 0, 0, 0.5);
    font-weight:bold;
`
function QuestionSelector(){
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return(
        <QuestionSelectorComponent>
             <Span>Выберите секретный вопрос:</Span>
            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">Секретный вопрос</InputLabel>
                <Select
                    native
                    label="Секретный вопрос"

                >
                    <option disabled>Секретный вопрос</option>
                    <option value="Имя друга детства">Имя друга детства</option>
                    <option value="Девичья фамилия матери">Девичья фамилия матери</option>
                    <option value="Имя первого питомца">Имя первого питомца</option>
                </Select>
            </FormControl>
        </QuestionSelectorComponent>
    )
}

export default QuestionSelector;