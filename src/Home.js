import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'AI 화재 탐지 시스템, Last7',
  description:
    "화재 인명피해를 줄이는 핵심은 조기 탐지 입니다. 기존의 온도 및 연기를 통한 감지 시스템에서 한 단계 진화한 영상 감지 시스템으로 여러분의 소중한 생명을 지키겠습니다.",
  imgText: 'main image description',
};

const sidebar = {
  title: 'Why Last7?',
  description:
    '화재 사고의 골든 타임은 7분입니다. 저희 Last7은 화재를 미리 탐지하여 관리자에게 알리고 모든 인원들이 대피 할 수 있도록 합니다.',

  social: [
    { name: 'AI팀: 안준언, 서은상, 최유숙' },
    { name: 'IoT팀: 박기완' },
    { name: 'Cloud팀: 박기윤' },
    { name: 'Big data팀: 김정현' },
  ],
};

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{height:"10px"}} />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default Home;