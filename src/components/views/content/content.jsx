import React, { Component } from 'react';
import Menu from './../menu/menu.jsx';
import Video from './../video/reactVideo.jsx';
import Login from './../auth/login.jsx'
import electron, {ipcRenderer} from 'electron'

const Content = (props) => {
  const { downloadAllLessson, url, user, setCurrentVideo, downloadIndVid, videoData, expandLesson, showMenu, logger, toggleMenu, currentVideo } = props;
  return (
  <div style={ container }>
    <Menu downloadAllLessson={ downloadAllLessson } user = { user } setCurrentVideo = { setCurrentVideo } downloadIndVid = { downloadIndVid } videoData = { videoData } expandLesson = { expandLesson } showMenu = { showMenu } currentVideo={ currentVideo }/>
    <Video logOutStuff = {logger}
      user = { user }
      toggleMenu = { toggleMenu }
      currentVideo = { currentVideo }
      videoData = { videoData }
      url = { url }
    />
  </div>
  // <button onClick={function(){props.logger()}}>Logout</button>
  );
};

const container = {
  backgroundColor: '#111539',
  display: 'flex',
  flexDirection: 'row',
  flex: '2',
  width: '100%',
  minWidth: '1000px'
}

export default Content;