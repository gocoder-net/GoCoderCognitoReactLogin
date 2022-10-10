import * as React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


export default function CategoryApp() {
  return (
      <div className="d-flex flex-column">
        <Button color="primary"  outline id="toggle">카테고리 펼치기</Button>
            <UncontrolledCollapse toggler="#toggle" className="m-0 p-0">
                <Card>
                    <CardBody>
                        카테고리 영역
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

      </div>
  );
}