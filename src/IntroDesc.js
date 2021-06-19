import "./IntroDesc.css";

const projectIntro = (
  <div>
    {`
    Last7은 AI 화재 탐지 모델을 이용하여 작은 불씨부터 대형화재까지 탐지합니다.
    `}
  </div>
);

const usecase = (
  <div>
    {`
            화재가 탐지되면 관리자에게 알람이 오는 한편, 환기를 위해 창문이 자동 개방됩니다.
    `}
  </div>
);

const procedure = (
  <div className="space">
    {`
    1. 로그인 후, 마이페이지에 들어가서 구매한 CCTV의 시리얼 번호를 입력합니다.
    2. IoT시스템(창문, CCTV, 라즈베리파이)을 실행합니다.
    3. 라즈베리파이의 MQTT Publisher를 구독한 AI EC2와 웹브라우저의 모니터링 페이지는 MQTT Broker를 통해 영상을 실시간으로 수신합니다.
    4. AI EC2에서 수신한 영상을 Yolo에 입력하고 출력 결과로 화재 탐지가 되면, AI EC2의 MQTT Publisher를 구독한 라즈베리파이의 MQTT Subscriber와 모니터링 페이지에 화재 탐지를 MQTT Broker를 통해 전송합니다.
    5. 화재탐지 결과를 수신한 라즈베리파이에서 창문이 자동 개방되고, 모니터링 페이지에서 화재가 발생한 곳을 찍고있는 CCTV를 시리얼 번호를 통해 식별하여 팝업창으로 화재영상과 화재위치를 띄웁니다.
    `}
  </div>
);

export { projectIntro, usecase, procedure };
