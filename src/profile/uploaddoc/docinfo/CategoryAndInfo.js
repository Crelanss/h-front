import React from 'react';
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const CategoryAndInfoComponent=styled.div`
    height:40%;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`

const Span=styled.span`
    font-family:Proxima Nova Light;
    font-size:20px;
    color:rgba(0, 0, 0, 0.5);
    font-weight:bold;
`

function CategoryAndInfo(){
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
        <CategoryAndInfoComponent>
            <Span>Информация о документе:</Span>
            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">Категория документа</InputLabel>
                <Select
                native
                label="Категория документа"

            >
                <option disabled>Выберите категорию</option>
                <option value="Ипотека">Ипотека</option>
                <option selected value="Кредит">Кредит</option>
                </Select>
            </FormControl>
        </CategoryAndInfoComponent>
    )
}

export default CategoryAndInfo;