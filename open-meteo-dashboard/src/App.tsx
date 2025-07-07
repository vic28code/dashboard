import './App.css'
import Grid from '@mui/material/Grid';
import IndicatorUI from './components/IndicatorUI';
import { useDataFetcher } from './functions/DataFetcher';

function App() {
  const { data, loading, error } = useDataFetcher();

  return (
    <>
      <div>
        <h1>Bienvenido al Dashboard</h1>
      </div>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {/* Encabezado */}
        <Grid item xs={12} md={12}>
          Elemento: Encabezado
        </Grid>
        {/* Alertas */}
        <Grid item xs={12} md={12}>Elemento: Alertas</Grid>
        {/* Selector */}
        <Grid item xs={12} md={3}>Elemento: Selector</Grid>
        {/* Indicadores */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <IndicatorUI title="Temperatura (2m)" description="XX°C" />
          </Grid>
          <Grid item xs={12} md={3}>
            <IndicatorUI title="Temperatura aparente" description="YY°C" />
          </Grid>
          <Grid item xs={12} md={3}>
            <IndicatorUI title="Velocidad del viento" description="ZZkm/h" />
          </Grid>
          <Grid item xs={12} md={3}>
            <IndicatorUI title="Humedad relativa" description="NN%" />
          </Grid>
        </Grid>
        {/* Gráfico */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          Elemento: Gráfico
        </Grid>
        {/* Tabla */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          Elemento: Tabla
        </Grid>
        {/* Información adicional */}
        <Grid item xs={12} md={12}>Elemento: Información adicional</Grid>
      </Grid>
    </>
  );
}

export default App;