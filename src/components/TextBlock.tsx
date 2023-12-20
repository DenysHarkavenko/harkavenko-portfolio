import { IInfoText } from '../data/infoText'
import classes from "./Main/Main.module.css"

interface ITextBlockProps {
    block: IInfoText
}

export default function TextBlock({ block }: ITextBlockProps) {
    return (
        <div className={classes.content__item}>
            <h1>— {block.title}</h1>
            <p>{block.body}</p>
        </div>
    )
}
