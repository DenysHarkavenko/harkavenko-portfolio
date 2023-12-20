import classes from "./Main.module.css"
import EducationItem from './EducationItem/EducationItem'
import TextBlock from '../TextBlock'
import Skills from './SkillsList/SkillList'
import { educationPlace } from '../../data/educationPlase'
import { infoContent } from '../../data/infoText'

export default function Main() {
    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <div className={classes.main__content}>
                    {infoContent.map((block) => (
                        <TextBlock block={block} key={block.title} />
                    ))}
                    <div className="main__content-education" id="education">
                        <h1>— Education & courses</h1>
                        {educationPlace.map((place) => (
                            <EducationItem
                                educationPlace={place}
                                key={place.img}
                            />
                        ))}
                    </div>
                </div>
                <Skills />
            </div>
        </main>
    )
}
