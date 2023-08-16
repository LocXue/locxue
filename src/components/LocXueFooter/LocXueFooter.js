import React from 'react';
import Container from '@material-ui/core/Container';
import './locxue-footer.scss';

export default function Header() {
  return (
    <React.Fragment>
        <Container maxWidth="md" className="locxue-footer">
            <Container maxWidth="md" className="locxue-keywords">
                <p>Keywords: Agile, Agilidad, Agilidad en Educación, Agilidad en Investigación, Agiles Colombia, LocXue, Software Engineering, Fusagasugá, Agilidad en Fusagasugá, Agilidad en Colombia, Universidad de Cundinamarca.</p>
            </Container>
            <p>Desarrollado por: <a href="http://www.deibyod.co" target="_blank">Deiby Od</a> &#38;  <a href="https://github.com/LocXue/locxue" target="_blank">Contribuir en GitHub</a></p>
        </Container>
    </React.Fragment>
  );
}
