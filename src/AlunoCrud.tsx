import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from "./data/logo.png";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function AlunoCrud() {
    const recruterInfo = async () => {
        /*const name = document.getElementById("name_prod_cadastro").value
        const valor = parseFloat(document.getElementById("valor_prod_cadastro").value)
        const desc = document.getElementById("desc_prod_cadastro").value
        const categoria = document.getElementById("categoria_prod_cadastro").value
        const quantidade = parseInt(document.getElementById("quantidade_prod_cadastro").value)
        */
        //await produto_post_new(name, valor, desc, categoria, quantidade)
    }

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
            console.log(windowHeight)
        }

        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <Container disableGutters maxWidth={windowWidth} sx={{ padding: 0 }}>
            <Box sx={{ minWidth: 600, minHeight: 300, height: windowHeight, padding: 0, mb: 0 }}>
                <Grid container spacing={0} sx={{
                    height: windowHeight,
                    minHeight: 400,
                    maxHeight: windowHeight,
                    mb: 0
                }}>
                    <Grid xs={4} sx={{
                        height: windowHeight,
                        minHeight: 400,
                        maxHeight: windowHeight,
                        mb: 0
                    }}>
                        <Box sx={{
                            height: windowHeight,
                            minHeight: 400,
                            maxHeight: windowHeight,
                            backgroundColor: 'blue',
                            mb: 0
                        }}>
                            <Grid container
                                xs={12}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    height: windowHeight,
                                    minHeight: 400,
                                    maxHeight: windowHeight,
                                    backgroundColor: 'blue',
                                    mb: 0
                                }}>

                                <Grid xs={10}>
                                    teste
                                </Grid>
                                <Grid xs>
                                    <Box>
                                        <ImageList>
                                            <ImageListItem>
                                                <img src={logo}></img>
                                            </ImageListItem>
                                        </ImageList>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid xs sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: windowHeight,
                        minHeight: 400,
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}>
                        <Box sx={{
                            mx: 2
                        }}>
                            <Box sx={{ my: 2 }}>
                                Informações da Empresa
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={10}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                Name
                                                id="Name"
                                                fullWidth
                                                label="Razão Social"
                                                defaultValue=""
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                CNPJ
                                                id="CNPJ"
                                                label="CNPJ"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Box sx={{ m: 0 }}>
                                    <TextField
                                        Ramo
                                        id="Ramo"
                                        fullWidth
                                        label="Ramo de atuação"
                                        defaultValue=""
                                        size="small"
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ my: 2 }}>
                                Informações do Representante e RH
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={10}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                NameRepresentante
                                                id="NameRepresentante"
                                                fullWidth
                                                label="Nome do representante"
                                                defaultValue=""
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                Cargo
                                                id="Cargo"
                                                label="Cargo"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={8}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                Telefone
                                                id="Telefone"
                                                fullWidth
                                                label="Telefone do RH"
                                                defaultValue=""
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                Email
                                                id="Email"
                                                label="Email do RH"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>


                            <Box sx={{ my: 2 }}>
                                Informações de endereço
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={5}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                CEP
                                                id="CEP"
                                                fullWidth
                                                label="CEP"
                                                defaultValue=""
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                logradouroType
                                                id="logradouroType"
                                                label="Tipo de logradouro"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs={4}>
                                        <Box sx={{ mr: 1 }}>
                                            <TextField
                                                Number
                                                id="Number"
                                                fullWidth
                                                label="Número"
                                                defaultValue=""
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ mx: 1 }}>
                                            <TextField
                                                Cidade
                                                id="Cidade"
                                                label="Cidade"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ ml: 1 }}>
                                            <TextField
                                                Estado
                                                id="Estado"
                                                label="Estado"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs>
                                        <Box sx={{ m: 0 }}>
                                            <TextField
                                                Complemento
                                                id="Complemento"
                                                label="Complemento"
                                                defaultValue=""
                                                fullWidth
                                                size="small"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ my: 2 }}>
                                <Grid container spacing={0} columns="16">
                                    <Grid xs>
                                        <Box sx={{ my: 2, mr: 1 }}>
                                            <Button fullWidth sx={{
                                                backgroundColor: "yellow"

                                            }}>
                                                Salvar informações
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid xs>
                                        <Box sx={{ my: 2, ml: 1 }}>
                                            <Button fullWidth sx={{
                                                backgroundColor: "red"

                                            }}>
                                                Excluir conta
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}