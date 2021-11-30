import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  Grid,
  CssBaseline,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContentDiv = styled(Box)`
flex-direction: column;
width: 100vw;
height: 45vh;
display: flex;
text-align: center;
h4{
  color: navy;
}
.emailForm{
  margin: 0 1em;
}
.emailInput{
  white-space: nowrap;
  font-size: calc(10px + 2 * ((100vw - 320px) / 680));
  font-weight: bold;
  flex-direction: column;
  line-height: 3;
}
.pageText {
font-size: calc(12px + 6 * ((100vw - 320px) / 680));
margin: 0 2em 0;
}
`;
const HeaderImg = styled(Box)`
display: flex;
align-self: flex-start;
flex-direction: row;
position: relative;
object-fit: scale-down;
width: 100vw;
  img{
    width: 100vw;
    height: 50%;
    object-fit: cover;
  }
`;

export default function Home() {
  //set state and error msg of MUI button^^
  //checks the state of the textfield onChange
  const formOptions = { resolver: yupResolver(schema)};
  const { handleSubmit, control, register } = useForm(formOptions);
  const { errors } = formState;
  //yup email validation schema
  const schema = yup.object({
    email: yup.string().email().required(),
  }).required();

  //action onSubmit Subscribe button, uploads the data
  const onSubmit = (data) => console.log(data);

  //useEffect Animate On Scroll 'AOS'
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Head>
        <title>JBS Coming Soon</title>
      </Head>

      <CssBaseline />
      <Grid
        container
        display="flex"
        justifyContent="center"
        width="100vw"
        height="100vh"
      >
        <HeaderImg
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            src="https://media.discordapp.net/attachments/707955771316633720/896612185755774986/unknown.png?width=1217&height=595"
            alt="Jump Button Studio Founders"
          />
        </HeaderImg>

        <ContentDiv item justify-content="center" align-items="center">
          <div className="pageText">
            <h4
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              increasing representation within the games and animation industry
            </h4>
            <h5
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              We're currently working on our website and super excited to show
              you what we've been working on
              <br />
              We want to reimagine what it means to be diverse and inclusive
              within the games and animation industry.
              <br />
              We do this by placing our storytellers and developers first <br />
              because we believe a diverse and inclusive studio can tell the
              most relatable and powerful stories.
            </h5>
          </div>
          <form>
          <Controller name={"emailInput"} control={control}
            render={({ field }) => (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="emailForm"
          >
            <Grid
              item
              xs={6}
              sm={3}
              lg={2}
              gap={{ xs: 0.5 }}
              noWrap
              className="emailInput"
            >
              <div className="emailInput" noWrap>
                Get notified when we launch site
              </div>
              <TextField
                {...field}
                {...register('email')}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                required error={errors.email ? 'is-invalid' : ''}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={6} sm={1} gap={{ xs: 0.5 }} flexDirection="column">
              <Button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                size="large"
                variant="contained"
                sx={{ mt: 6, mb: 1 }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid> )}/>
          </form>
          <BottomNavigation align-self="flex-end">
            <BottomNavigationAction
              href="https://www.facebook.com/JumpButtonStudio/"
              label="Facebook"
              value="recents"
              icon={<FacebookIcon style={{ fill: 'black' }} />}
            />
            <BottomNavigationAction
              href="https://twitter.com/JumpButtonS"
              label="Twitter"
              value="favorites"
              icon={<TwitterIcon style={{ fill: 'black' }} />}
            />
            <BottomNavigationAction
              href="https://www.instagram.com/jumpbuttonstudio"
              label="Instagram"
              value="nearby"
              icon={<InstagramIcon style={{ fill: 'black' }} />}
            />
            <BottomNavigationAction
              href="https://www.youtube.com/channel/UCLWl_R2zfy94mQjY-Ctqs2g"
              label="YouTube"
              value="folder"
              icon={<YouTubeIcon style={{ fill: 'black' }} />}
            />
          </BottomNavigation>
        </ContentDiv>
      </Grid>
    </div>
  );
}
