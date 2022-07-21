const portfolios = [
    {
        title :'네트워크 트래픽 분석',
        content :'네트워크 트래픽 플로우를 관리하고, 트래픽 정보를 수집/분석한 후 그 결과를 효율적으로 검색 및 처리하기 분석 도구이다. 네트워크 트래픽 수집기를 통해 수집된 데이터에 대하여 데이터추출/정형화/통계화를 제공하고 네트워크 트래픽 데이터 플로우 및 관련 데이터를 분석 및 관리하며 통합분석시스템의 분석결과를 반영하여 침해시나리오를 생성한다.',
        tech_l : 'Javascript,Java,HTML5,CSS',
        tech_f: 'AngularJS,Vert.x,D3',
        tech_d:'Visual Studio Code,Eclipse',
        tech_dt:'InfiniFlux,MySQL',
        images: [
            require('../images/card/p1-1.png'),
            require('../images/card/p1-2.png'),
            require('../images/card/p1-3.png'),
        ],
        video: null,
    },
    {
        title :'Forensic Analyzer',
        content :'포렌식 증거에 대한 분석 주체가 변호사나 시스템 관리자 등 비전문가로 확대되면서 증거에 대한 연관성을 찾고 이를 체계적으로 표현하는 시각화 기술에 대한 연구가 활발히 진행되고, 포렌식 수사와 같이 많은 양의 데이터를 지각하고 의미있는 정보를 찾기 위해서는 정보 시각화 기법 도입하였다. 다양한 포렌식 도구로부터 추출된 결과의 연관관계를 분석하여 직관적인 내용 파악을 가능하게 하는 그래픽 기반의 데이터 가시화하였다.',
        tech_l : 'C#',
        tech_f: 'DockingLibrary',
        tech_d:'Visual Studio 2010',
        tech_dt:'File',
        images: [
            require('../images/card/p2-1.png'),
        ],
        video: null,
    },
    {
        title :'클라우드 기반 인식 신경망 인큐베이팅',
        content :'인식 신경망 인큐베이팅 딥러닝 기술 개발에 필요한 학습 지정, 관리, 진행 상황 모니터링 및 결과를 제공하는 UI를 제공한다. 인식 신경망 인큐베이팅 플랫폼의 객체(사람, 차량) 탐지 및 Re-ID(재검출), 차량 번호 인식, 교통사고 등 다양한 영상 인식 학습(딥러닝)을 관리 할수 있는 UI를 제공한다.',
        tech_l : 'Typescript,SCSS,C# for Unity',
        tech_f: 'Angular,Node.js,Unity',
        tech_d:'Visual Studio 2017,Visual Studio Code,Unity Personal',
        tech_dt:'MariaDB',
        images: [
            require('../images/card/p3-1.png'),
        ],
        video: require('../video/pfVideo.mp4'),
    },
    {
        title :'u-GIS',
        content :'국제 해양 GIS 표준기술 기반 차세대 항행 정보지원 시스템 기술 개발 과제에서 개발하는 On-Shore 플랫폼 기술 중 WxS 서비스 인터페이스 및 테스트 모듈 구현하고, 특히 웹서비스에서 사실상의 국제표준인 OGC의 SLD/SE 표준 인터페이스를 준수하고, 표준 서비스 인터페이스와 호환성 확보하기 위해 개발되었다.',
        tech_l : 'C#',
        tech_f: 'WPF,Google.Protobuf,Grpc,Newtonsoft.Json,Npgsql,DockingLibrary,Proj.NET,GDAL',
        tech_d:'Visual Studio 2015',
        tech_dt:'File,ADD,Title URL',
        images: [
            require('../images/card/p4-1.png'),
        ],
        video: null,
    },
    {
        title :'웹기반 차세대 전자해도 서비스 테스트베드 연동 시제품',
        content :'국제 해양 GIS 표준기술 기반 차세대 항행 정보지원 시스템 기술 개발의 On-Shore 플랫폼 과제에서 서버 및 단말 모듈로 구성되어 전자해도를 제공하고 있고 이에 대한 기능 보완 및 성능검증을 위한 테스트베드 UI/UX를 제공한다. 최근에 확장되고 있는 다양한 해양공간정보 콘텐츠를 추가 연계하여 테스트베드에서 표출한다.',
        tech_l : 'C#',
        tech_f: 'WPF,Google.Protobuf,Grpc,Newtonsoft.Json,Npgsql,DockingLibrary,Proj.NET,GDAL',
        tech_d:'Visual Studio 2015',
        tech_dt:'File,ADD,Title URL',
        images: [
            require('../images/card/p5-1.png'),
        ],
        video: null,
    },
    {
        title :'클라우드 기반의 자율이동 서비스를 위한 협력적 주행상황인지 및 개방형 플랫폼 기술 개발',
        content :'자율주행을 위한 도로 정밀맵 데이터 구축/편집 및 실측 불가능한 교차로 차로 중심선 자동 생성 UI를 제공한다. 또한 생성된 정밀맵 데이터를 서비스 가능하도록 가공하여 DB에 저장하는 기능을 제공한다.',
        tech_l : 'C#',
        tech_f: '.NET Framework 4.5,WPF,VWorld',
        tech_d:'Visual Studio 2017',
        tech_dt:'MySQL',
        images: [
            require('../images/card/p6-1.png'),
        ],
        video: null,
    }
]

export default portfolios;
