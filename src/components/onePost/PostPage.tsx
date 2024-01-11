import { FunctionComponent, ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { postApi } from "../../services/api/api.ts";
import style from "./style.module.css";

const PostPage: FunctionComponent = (): ReactElement => {
    const { pageId } = useParams();

    const { data: posts, isLoading } = postApi.useFetchPostByIdQuery(
        Number(pageId),
    );

    return (
        <>
            {isLoading ? (
                <div>Загрузка данных</div>
            ) : (
                <div className={style.post_page}>
                    <span className={style.post_page__id}>
                        Номер: {posts!.id}
                    </span>
                    <span className={style.post_page__title}>
                        Заголовок: {posts!.title}
                    </span>
                    <span className={style.post_page__body}>
                        Описание: {posts!.body}
                    </span>
                    <button className={style.post_page__button}>
                        <Link className={style.post_page__button_link} to={"/"}>
                            Назад
                        </Link>
                    </button>
                </div>
            )}
        </>
    );
};

export default PostPage;
