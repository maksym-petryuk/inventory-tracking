import {Col, Row} from "antd";
import { Input } from 'antd';
import type {SearchProps} from "antd/es/input";
import {Header} from "antd/es/layout/layout";

export default function Sales () {
    const { Search } = Input;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <Row gutter={16} style={{ minHeight: '100%' }}>

            {/* Ліва частина: Пошук і каталог (16 з 24 колонок) */}
            <Col span={16}>
                <div style={{ color: '#001529', padding: '16px', borderRadius: '8px', height: '100%', }}>
                    <Search placeholder="input search text " size="large"  allowClear onSearch={onSearch} style={{  width: "100%" ,  }} />
                </div>
            </Col>

            {/* Права частина: Чек касира (8 з 24 колонок) */}
            <Col span={8}>
                <div style={{ background: '#fafafa', padding: '16px', borderRadius: '8px', border: '1px solid #d9d9d9', height: '100%' }}>
                    <h2 style={{color:"#001529", fontSize:'2rem' /*textAlign:"left"*/ }}>Чек</h2>

                </div>
            </Col>

        </Row>
    )
}
