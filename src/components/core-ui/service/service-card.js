import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import expImgBlack from '../../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../../assets/svg/experience/expImgWhite.svg';
import { ThemeContext } from '../../../contexts/theme-context';
import './service';

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.quaternary,
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}` }>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details " style={{alignItems:'center'}}>
                    <h2 style={{color: theme.tertiary}}>{company}</h2>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard;
