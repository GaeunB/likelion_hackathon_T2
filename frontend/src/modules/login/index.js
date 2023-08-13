import React from "react";
 import * as Components from '../login/Components';
const Login = () => {
     const [signIn, toggle] = React.useState(true);
      return(
        <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <img  alt="logo" src="./logoCBG.png" className="lg:w-1/6 px-4 py-10 mx-auto"/>
          <Components.Container className= "container mx-auto ">
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title className="text-4xl">새로운 계정을 <br/>만들어 보세요!</Components.Title>
                      <Components.Input type='text' placeholder='성함' />
                      <Components.Input type='phone-number' placeholder='전화번호' />
                      <Components.Input type='password' placeholder='비밀번호' />
                      <Components.Button>회원 가입하기</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title className="text-4xl">로그인하세요</Components.Title>
                       <Components.Input type='phone-number' placeholder='전화번호' />
                       <Components.Input type='password' placeholder='비밀번호' />
                       <Components.Button>로그인하기</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title className="text-4xl">이미 회원가입을<br/> 하셨나요?</Components.Title>
                      <Components.Paragraph>
                          이미 계정이 있으시다면,<br/> 로그인을 해보세요!
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          로그인하기
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title className="text-4xl">아직 회원가입을<br/> 하지 않으셨나요?</Components.Title>
                        <Components.Paragraph >
                            첫 방문이시라면 회원 가입하고<br/>더 편리한 쇼핑을 경험해보세요!
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                회원가입하기
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
      )
 }

 export default Login;