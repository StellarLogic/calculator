import { useEffect, useState } from "react";
import Button from "./Components/Button/Button";
import { Col, Input, Row } from "antd";
import { StyledContainer } from "./style";

function App() {
  const [operandOne, setOperandOne] = useState("");
  const [operandTwo, setOperandTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState(0);
  const [printValue, setPrintValue] = useState(0);
  console.log(`print =>`, {
    operandOne,
    operandTwo,
    operator,
    total,
    printValue,
  });
  const handleClick = ({ target }) => {
    const attribute = target.getAttribute("buttonType");
    const value = target.textContent;

    if (attribute == "calculate") {
      const result = eval(`${operandOne}${operator}${operandTwo}`);
      clearAll();
      return setTotal(result);
      // parseInt(operandOne)
    }
    if (attribute == "operator") {
      return setOperator(value);
    }

    if (attribute == "operand" && !operator) {
      setOperandOne(operandOne + value);
    } else {
      setOperandTwo(operandTwo + value);
    }
  };

  const clearAll = () => {
    setOperandOne("");
    setOperandTwo("");
    setOperator("");
  };

  useEffect(() => {
    handlePrintValue();
  }, [operandOne, operandTwo, operator, total]);

  const handlePrintValue = () => {
    if (!operandOne && !operandTwo && !operator) {
      setPrintValue(0);
    } else if (operandOne && !operator && !operandTwo) {
      setPrintValue(operandOne);
    } else if (operandOne && operator && !operandTwo) {
      setPrintValue(operator);
    } else if (operandOne && operandTwo && operator) {
      setPrintValue(operandTwo);
    } else if (!operandOne && !operandTwo && !operator && total) {
      setPrintValue(total);
    } else {
      setPrintValue(0);
    }
  };

  return (
    <StyledContainer className="App">
      <div className="container">
        <Row gutter={[15, 15]}>
          <Col span={24}>
            <Input
              style={{ textAlign: "right" }}
              size="large"
              value={printValue}
            />
          </Col>
          <Col span={6}>
            <Button value={7} buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="8" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="9" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="-" buttonType="operator" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="4" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="5" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="6" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="+" buttonType="operator" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="1" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="2" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="3" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="*" buttonType="operator" onClick={handleClick} />
          </Col>
          <Col span={6}>
            <Button value="0" buttonType="operand" onClick={handleClick} />
          </Col>
          <Col span={12}>
            <Button
              value="="
              type="primary"
              buttonType="calculate"
              onClick={handleClick}
            />
          </Col>
          <Col span={6}>
            <Button value="/" buttonType="operator" onClick={handleClick} />
          </Col>
        </Row>
      </div>
    </StyledContainer>
  );
}

export default App;
