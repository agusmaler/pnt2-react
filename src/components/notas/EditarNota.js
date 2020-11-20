import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarNota } from "../../actions/notas";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const EditarNota = () => {
  const classes = useStyles();
  
  const history = useHistory();
  const dispatch = useDispatch();
  const { notaeditar } = useSelector(state => state.notas);


  const [inputValues, setInputValues] = useState({
    autor: "",
    titulo: "",
    texto: "",
  });

  const { autor, titulo, texto } = inputValues;

  useEffect(() => { 
    setInputValues(notaeditar)
  }, [notaeditar])

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };


  const onSubmitEditar = e => {
    e.preventDefault();
    dispatch(editarNota(inputValues));
    history.push('/');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Editar Nota
        </Typography>

        <form className={classes.form} noValidate onSubmit={onSubmitEditar}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="autor"
            label="Autor"
            name="autor"
            autoComplete="Nombre del Autor"
            autoFocus
            value={autor}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="titulo"
            label="titulo"
            autoComplete="Titulo de la nota"
            autoFocus
            name="titulo"
            value={titulo}
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="outlined-multiline-static"
            label="Nota"
            multiline
            name="texto"
            value={texto}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar Cambios
          </Button>
        </form>
      </div>
    </Container>
  );
};
