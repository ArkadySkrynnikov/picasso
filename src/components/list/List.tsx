import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { postApi } from "../../services/api/api.ts";
import Post from "../post/Post.tsx";

const List: FunctionComponent = (): ReactElement => {
    const [currentPostStart, setCurrentPostStart] = useState(0);

    const { data: posts, isLoading } = postApi.useFetchLimitedPostsQuery({
        limit: 10,
        start: currentPostStart,
    });

    const [isMyFetching, setIsFetchingDown] = useState(false);
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart((prev) => {
                return prev < 93 ? prev + 1 : prev;
            });
            setIsFetchingDown(false);
        }
    }, [isMyFetching]);

    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart((prev) => {
                return prev > 0 ? prev - 1 : prev;
            });
            setIsMyFetchingUp(false);
        }
    }, [isMyFetchingUp]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 50) {
            setIsMyFetchingUp(true);
        }
        if (
            e.target.documentElement.scrollHeight -
                e.target.documentElement.scrollTop -
                window.innerHeight <
            50
        ) {
            setIsFetchingDown(true);
            window.scrollTo(
                0,
                e.target.documentElement.scrollHeight +
                    e.target.documentElement.scrollTop,
            );
        }
    };

    return (
        <>
            {isLoading ? (
                <div>Загрузка данных</div>
            ) : (
                <div className='post__list'>
                    {posts?.map((post) => <Post key={post.id} {...post} />)}
                </div>
            )}
        </>
    );
};

export default List;
