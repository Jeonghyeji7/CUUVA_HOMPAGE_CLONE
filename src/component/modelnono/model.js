import React, {Component} from 'react';
import '../../App';
import ReactModal from 'react-modal-resizable-draggable';

class App extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render() {
        return (
            <div className="App">
                <button onClick={this.openModal}>
                    Open modal
                </button>
                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal} 
                    isOpen={this.state.modalIsOpen}>
                    <h3>My Modal</h3>
                    <div className="body">
                       <div>
                            이미지 슬라이드
                       </div>
                       <div>
                            <div>
                            네트워크 트래픽 플로우를 관리하고, 트래픽 정보를 수집/분석한 후 그 결과를 효율적으로 검색 및 처리하기 분석 도구이다. 네트워크 트래픽 수집기를 통해 수집된 데이터에 대하여 데이터 추출/정형화/통계화를 제공하고 네트워크 트래픽 데이터 플로우 및 관련 데이터를 분석 및 관리하며 통합분석시스템의 분석결과를 반영하여 침해시나리오를 생성한다.
                            </div>
                            
                       </div>
                    </div>
                    <button onClick={this.closeModal}>
                        Close modal
                    </button>
                </ReactModal>
            </div>
        );
    }
}

export default App;