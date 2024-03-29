import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
// Caroussel 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// Imagenes carroussel
import inversion from '../../../../assets/img/crecimiento-del-dinero.png'
import divisa from '../../../../assets/img/cambio-de-divisas.png'
import mercadoDivisa from '../../../../assets/img/mercado.png'
import operaciones from '../../../../assets/img/kpi.png'
import sp from '../../../../assets/img/actuacion.png'
import bursatil from '../../../../assets/img/bursatil.png'
import money from '../../../../assets/img/divisas.png'
import broker from '../../../../assets/img/broker.png'
import depreciacion from '../../../../assets/img/depreciacion.png'
import inflacion from '../../../../assets/img/inflacion.png'
import operarCorto from '../../../../assets/img/operarCorto.png'



const tutorialSteps = [
    {
        label: '¿Qué es una inversión ?',
        imgPath: inversion,
        title:'Definición:',
        info: 'Una inversión es un activo comprado por un individuo u organización con la expectativa    de que generará ingresos o ganancias en el futuro. Ejemplos de inversiones pueden incluir acciones y bienes raíces.'
    },
    {
        label: '¿Qué es una acción ?',
        imgPath: divisa,
        title:'Definición:',
        info: 'Una acción es una unidad de propiedad en una empresa: si posee una acción, eso lo convierte en accionista, lo que significa que puede ser elegible para recibir dividendos si la empres tiene éxito y puede tener voto en algunas decisiones de la empresa.'
    },
    {
        label: '¿Qué es una divisa ?',
        imgPath: money,
        title:'Definición:',
        info: 'Una divisa es toda moneda extranjera, es decir, monedas oficiales distintas de la moneda legal en el propio país.'
    },
    {
        label: '¿Qué es el mercado de divisas ?',
        imgPath: mercadoDivisa,
        title:'Definición:',
        info: 'El mercado de divisas es donde los compradores y vendedores se unen para negocias acciones de empresas elegibles.'
    },
    {
        label: '¿Qué operaciones se hacen en el trading ?',
        imgPath: operaciones,
        title: 'Definición:',
        info: 'Comprar un activo para venderlo a un precio superior (Largos) y vender un activo, para comprarlo de nuevo por un coste más bajo (Cortos)',
    },
    {
        label: '¿Qué es el S&P 500 ?',
        imgPath: sp,
        title: 'Definición:',
        info: 'El índice Standard & Poors 500, también conocido como S&P 500, es uno de los índices bursátiles más importantes de Estados Unidos. Al S&P 500 se lo considera el índice más representativo de la situación real del mercado.El índice se basa en la capitalización bursátil de 500 grandes empresas que poseen acciones que cotizan en las bolsas NYSE o NASDAQ.',
    },
    {
        label: '¿Qué es un índice bursátil ?',
        imgPath: bursatil,
        title: 'Definición:',
        info: 'Un índice bursátil es un valor numérico, que se calcula según los precios de mercado de cada uno de los valores que componen ese índice en un momento determinado. La rentabilidad de un índice es la variación de su valor de un periodo a otro.',
      },
    {
        label: '¿Qué es un bróker ?',
        imgPath: broker,
        title: 'Definición:',
        info: 'Un bróker o agente de bolsa es un individuo o empresa que realiza operaciones bursátiles en nombre de un inversor. Pueden hacerlo con diferentes clases de activos, como acciones, forex, bienes raíces o seguros. Un bróker cobrará, normalmente, una comisión para que la orden se ejecute.',
    },
    {
        label: '¿Qué es la depreciación ?',
        imgPath: depreciacion,
        title: 'Definición:',
        info: 'La depreciación de la divisa es la disminución del valor de una divisa en relación con otra. Se refiere específicamente a las divisas en un tipo de cambio flexible: un sistema en el que el mercado de forex fija el valor de una divisa, basándose en la oferta y la demanda.',
    },
    {
        label: '¿Qué es la inflación ?',
        imgPath: inflacion,
        title: 'Definición:',
        info: 'La inflación es el aumento del coste de los bienes y servicios en una economía. Como eso a su vez significa que cada unidad de la moneda de una economía ha perdido valor respecto a esos bienes y servicios, también es un indicador de la devaluación de una moneda.',
    },
    {
        label: '¿Qué es operar en corto ?',
        imgPath: operarCorto,
        title: 'Definición:',
        info: 'Operar en corto es vender un activo que no se posee con la esperanza de que su precio baje y poder cerrar la operación con beneficios. También se denomina ir corto o adoptar una posición corta.',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 650,
        flexGrow: 1,
        border: 'solid 5px',
        left: '200px',
        
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 100,
      paddingLeft: theme.spacing(1),
      backgroundColor: 'white',
      color: 'black',
      

    },
    img: {
      height: 455,
      maxWidth: 590,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }));



function EducacionF(){

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const popover = (
        <Popover bsPrefix="educacion-popover" >
          <Popover.Title bsPrefix="educacion-popover-title"><h1><strong>{tutorialSteps[activeStep].title}</strong></h1></Popover.Title>
          <Popover.Content bsPrefix ="educacion-popover-content" >
            <h2>{tutorialSteps[activeStep].info}</h2>
        </Popover.Content>
        </Popover>
      );
    
    
    const position =()=> {
        if(window.innerWidth < 1024)
        return 'bottom';
        else 
        return 'right';

    }
    return(
        <section id="educacion">
            {/* <Navbar/> */}
            <div>
                <h1>Educación</h1>
                
                <div style={{"margin-left":"4%"}}className={classes.root}>
                    <Paper square elevation={6} className={classes.header}>
                        <Typography style={{"font-size":"2rem"}}>{tutorialSteps[activeStep].label}</Typography>
                    </Paper>
                    <OverlayTrigger trigger="click" placement={position()} overlay={popover}
                    >
                        <img
                            style={{"margin-left":"2%"}}
                            className={classes.img}
                            src={tutorialSteps[activeStep].imgPath}
                            alt={tutorialSteps[activeStep].label}
                        />
                    </OverlayTrigger>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="text"
                        activeStep={activeStep}
                        nextButton={
                        <Button 
                            style={{
                                "font-weight": "500",
                                "font-size": "16px",
                                "letter-spacing": "1px",
                                "display": "inline-block",
                                "border-radius":"50px",
                                "transition": "0.5s",
                                "background": "#2dc997",
                                "border": "2px solid #2dc997",
                                "color": "white",   
                            }}
                            stylesize="big" onClick={handleNext} disabled={activeStep === maxSteps - 1
                        }>
                            Siguiente
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                        }
                        backButton={
                        <Button 
                            style={{
                                "font-weight": "500",
                                "font-size": "16px",
                                "letter-spacing": "1px",
                                "display": "inline-block",
                                "border-radius":"50px",
                                "transition": "0.5s",
                                "background": "#2dc997",
                                "border": "2px solid #2dc997",
                                "color": "white",   
                            }}
                        size="big" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Atrás
                        </Button>
                        }
                    />
                </div>
            </div>
        </section>
    );
}





export default class Educacion extends React.Component{
constructor(props){
        super(props)
        this.state={
            activateStep: 0,
            
        }
    }   
    
    Navbar=()=>{
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
    }

    RenderEducacion = ()=>{
        var html = EducacionF();
        return(
            <>
                {html}
            </>
        )
    }
    render(){
        return(
            <div>
                <this.Navbar/>
                <this.RenderEducacion/>
            </div>
        );
    }
}