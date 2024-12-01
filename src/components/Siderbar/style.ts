import styled from "styled-components";

export const Container = styled.div`
aside.app-sidebar {
  margin-top:0;
  position:fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #F29502 0%, #F29502 100%);

  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  
  
}

 aside.app-sidebar img {
  width: 48px;
}

 aside.app-sidebar footer a,
 aside.app-sidebar footer button {
  width: 48px;
  height: 48px;

  border: 0;

  background: transparent;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

aside.app-sidebar footer a:hover,
aside.app-sidebarfooter button:hover {
  background: #F102;
}
  `;