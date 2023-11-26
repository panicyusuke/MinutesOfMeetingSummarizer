import React, {useState} from 'react';
import './App.css';
import meetingData from './api_data/meeting_text.json';
import prepData from './api_data/prep.json';
import starData from './api_data/star.json';
import soapData from './api_data/soap.json';
import swotData from './api_data/swot.json';
import canvasData from './api_data/canvas.json';

// フォーマットの種類を定義するenum
enum Format {
    PREP = 'PREP',
    STAR = 'STAR',
    SOAP = 'SOAP',
    SWOT = 'SWOT',
    CANVAS = 'キャンバス'
}


const formatData = {
    [Format.PREP]: prepData,
    [Format.STAR]: starData,
    [Format.SOAP]: soapData,
    [Format.SWOT]: swotData,
    [Format.CANVAS]: canvasData
}

type MeetingData = {
    speaker: string;
    content: string;
};

const App: React.FC = () => {
    const [format, setFormat] = useState<Format>(Format.PREP);

    return (
        <div className="App">
            <header className="App-header">
                <h1>議事録可視化アプリ</h1>
            </header>
            <div className="main-content">
                <div className="meeting-table">
                    <table>
                        <thead>
                        <tr>
                            <th>発話者</th>
                            <th>発話内容</th>
                        </tr>
                        </thead>
                        <tbody>
                        {meetingData.map((data: MeetingData, index: number) => (
                            <tr key={index}>
                                <td>{data.speaker}</td>
                                <td>{data.content}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="format-content">
                    <div className="format-buttons">
                        <button onClick={() => setFormat(Format.PREP)}>PREP法</button>
                        <button onClick={() => setFormat(Format.STAR)}>STAR法</button>
                        <button onClick={() => setFormat(Format.SOAP)}>SOAP法</button>
                        <button onClick={() => setFormat(Format.SWOT)}>SWOT法</button>
                        <button onClick={() => setFormat(Format.CANVAS)}>ミーティング・キャンバス</button>
                    </div>
                    <div className="display-area">
                        <p>現在のフォーマット: {format}</p>
                        {Object.entries(formatData[format]).map(([key, value]) => (
                            <div className="section" key={key}>
                                <h2>{key}</h2>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
