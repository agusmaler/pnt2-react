import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { agregarNuevaNota2, setError } from "../../actions/notas";

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
  root: {
    width: "100%",
    margin: theme.spacing(1, 0, 0),
    "& > * + *": {
      marginTop: theme.spacing(5),
      alignItems: "center",
    },
  },
}));

export const AgregarNota = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.notas);

  const [inputValues, setInputValues] = useState({
    autor: "",
    titulo: "",
    texto: "",
  });

  const { autor, titulo, texto } = inputValues;

  const onSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      let id = uuidv4();

      dispatch(
        agregarNuevaNota2({
          autor,
          titulo,
          texto,
          id,
        })
      );

      Swal.fire("Correcto", "La nota se agrego correctamente", "success");
      history.push("/");
    }
  };

  const validarFormulario = () => {
    if (autor.trim().length === 0) {
      dispatch(setError("El nombre es obligatorio"));
      return false;
    } else if (titulo.trim().length === 0) {
      dispatch(setError("El titulo es obligatoria"));
      return false;
    } else if (texto.trim().length === 0) {
      dispatch(setError("La nota es obligatoria"));
      return false;
    }
    return true;
  };

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Nueva Nota
        </Typography>

        {error && (
          <div className={classes.root}>
            <Alert align="center" variant="outlined" severity="error">
              {error}
            </Alert>
          </div>
        )}

        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="autor"
            label="Autor"
            autoComplete="Nombre del Autor"
            autoFocus
            name="autor"
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
            id="texto"
            label="Texto de nota"
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
            Crear Nota
          </Button>
        </form>
      </div>
    </Container>
  );
};
