import React, { useState, useEffect, useContext, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Container, MainVideoContainer, VideosContainer, NotFoundContainer, ItemContainer, NotFoundTitle } from './styles';
import objectQuery, { GET_COURSE_VIDEOS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';
import { COURSE, PAGINATION, COURSE_VIDEO, VIDEO } from 'services/api/responseAPI';
import ContextCourse from 'context/ContextCourse';
import Texts from 'config/Texts';
import List from 'components/List';
import MainVideo from './components/MainVideo';
import ThumbVideo from './components/ThumbVideo';
import CourseURL from 'routes/URLs/CourseURL';
import { objectPagination } from 'services/api/config';

const Item = memo(({ to, active = null, ...props }) => {
    return (
        <ItemContainer
            to={to}
            active={active ? String(active) : ""}
        >
            <ThumbVideo
                {...props}
            />
        </ItemContainer>
    );
});

export function Videos() {
    const [currentyVideo, setCurrentyVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id: courseId } = useContext(ContextCourse);
    const { data, loading } = useQuery(GET_COURSE_VIDEOS, objectQuery({
        id: courseId,
        ...objectPagination({
            orderBy: [{ column : COURSE_VIDEO.NAME }]
        })
    }));
    const { indexVideo } = useParams();

    const TEXTS = Texts.PAGE_AUTH_COURSE.VIDEOS;

    const LINK_VIEW = (pos) => CourseURL(courseId).REDIRECT.VIDEOS(pos).BASE;

    const getCurrentyPos = useCallback(() => {
        if (videos && indexVideo >= 0 && indexVideo < videos.length) {
            return indexVideo;
        }
        return 0;
    }, [indexVideo, videos]);

    useEffect(() => {
        if (data && data.response && data.response[COURSE.VIDEOS] && data.response[COURSE.VIDEOS][PAGINATION.ITEMS] && data.response[COURSE.VIDEOS][PAGINATION.ITEMS].length > 0) {
            setVideos(data.response[COURSE.VIDEOS][PAGINATION.ITEMS]);
        }
    }, [data]);

    useEffect(() => {
        (async () => {
            setCurrentyVideo(videos[getCurrentyPos()] || null);
        })()
    }, [videos, getCurrentyPos]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                {
                    videos && videos.length > 0 ? (
                        <>
                            <MainVideoContainer>
                                {
                                    currentyVideo && currentyVideo[COURSE_VIDEO.VIDEO] &&
                                    <MainVideo
                                        videoUrl={currentyVideo[COURSE_VIDEO.VIDEO][VIDEO.URL]}
                                        name={currentyVideo[COURSE_VIDEO.NAME]}
                                        description={currentyVideo[COURSE_VIDEO.DESCRIPTION]}
                                    />
                                }
                            </MainVideoContainer>
                            <VideosContainer>
                                <List
                                    items={videos}
                                    renderItem={(item, key) => {
                                        return (
                                            <Item
                                                key={key}
                                                active={String(key) === String(getCurrentyPos())}
                                                to={LINK_VIEW(key)}
                                                videoUrl={item[COURSE_VIDEO.VIDEO][VIDEO.URL]}
                                                name={item[COURSE_VIDEO.NAME]}
                                                createdAt={item[COURSE_VIDEO.CREATED_AT]}
                                            />
                                        );
                                    }}
                                />
                            </VideosContainer>
                        </>
                    ) : (
                            <NotFoundContainer>
                                <NotFoundTitle>{TEXTS.NOT_FOUND}</NotFoundTitle>
                            </NotFoundContainer>
                        )
                }
            </ComponentLoading>
        </Container>
    );
}
export default Videos;