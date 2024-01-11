import { OnePostProps } from "../../types/postTypes.ts";
import { FunctionComponent, ReactElement } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { trimmed } from "../../utils/trimmed.ts";

const Post: FunctionComponent<OnePostProps> = ({
    id,
    title,
    body,
}): ReactElement => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    };

    return (
        <div className={style.post}>
            <span className={style.post__id}>Номер: {id}</span>
            <span className={style.post__title}>Заголовок: {title}</span>
            <span className={style.post__body}>Описание: {trimmed(body)}</span>
            {body.length > 50 && (
                <button className={style.post__button} onClick={handleClick}>
                    Просмотр
                </button>
            )}
        </div>
    );
};

export default Post;
