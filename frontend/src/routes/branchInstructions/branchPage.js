import React from "react";
import { useState, useEffect } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";
import TextInput from "../../components/textinput/textInput";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Registers from "../../components/registers/registers";
import Switch from "../../components/switch/switch";

import "./branchPage.css";

const BranchPage = () => {
    const operation = [
        { value: "B", label: "B" },
        { value: "BL", label: "BL" },
        { value: "BX", label: "BX" },
        { value: "BLX", label: "BLX" },
    ];

    const register = [
        { value: "R0", label: "R0" },
        { value: "R1", label: "R1" },
        { value: "R2", label: "R2" },
        { value: "R3", label: "R3" },
        { value: "R4", label: "R4" },
        { value: "R5", label: "R5" },
        { value: "R6", label: "R6" },
        { value: "R7", label: "R7" },
        { value: "R8", label: "R8" },
        { value: "R9", label: "R9" },
        { value: "R10", label: "R10" },
        { value: "R11", label: "R11" },
        { value: "R12", label: "R12" },
        { value: "R13", label: "R13" },
        { value: "R14", label: "R14" },
        { value: "R15", label: "R15" },
        { value: "CPSR", label: "CPSR" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("");
    const [selectedImeDestination, setselectedImeDestination] = useState("");
    const [selectedRegDestination, setselectedRegDestination] = useState("");
    const [isToggled, setIsToggled] = useState(false);
    const [inputR0, setInputR0] = useState();
    const [inputR1, setInputR1] = useState();
    const [inputR2, setInputR2] = useState();
    const [inputR3, setInputR3] = useState();
    const [inputR4, setInputR4] = useState();
    const [inputR5, setInputR5] = useState();
    const [inputR6, setInputR6] = useState();
    const [inputR7, setInputR7] = useState();
    const [inputR8, setInputR8] = useState();
    const [inputR9, setInputR9] = useState();
    const [inputR10, setInputR10] = useState();
    const [inputR11, setInputR11] = useState();
    const [inputR12, setInputR12] = useState();
    const [inputR13, setInputR13] = useState();
    const [inputR14, setInputR14] = useState();
    const [inputR15, setInputR15] = useState();
    const [inputCPSR, setInputCPSR] = useState();

    const handleSelectedOperation = (data) => {
        setSelectedOperation(data);
    };

    const handleselectedRegDestination = (data) => {
        setselectedRegDestination(data);
    };

    const handleTextInput = (event) => {
        setselectedImeDestination(event.target.value);
    };

    const handleR0 = (event) => {
        setInputR0(event.target.value);
    };

    const handleR1 = (event) => {
        setInputR1(event.target.value);
    };

    const handleR2 = (event) => {
        setInputR2(event.target.value);
    };

    const handleR3 = (event) => {
        setInputR3(event.target.value);
    };

    const handleR4 = (event) => {
        setInputR4(event.target.value);
    };

    const handleR5 = (event) => {
        setInputR5(event.target.value);
    };

    const handleR6 = (event) => {
        setInputR6(event.target.value);
    };

    const handleR7 = (event) => {
        setInputR7(event.target.value);
    };

    const handleR8 = (event) => {
        setInputR8(event.target.value);
    };

    const handleR9 = (event) => {
        setInputR9(event.target.value);
    };

    const handleR10 = (event) => {
        setInputR10(event.target.value);
    };

    const handleR11 = (event) => {
        setInputR11(event.target.value);
    };

    const handleR12 = (event) => {
        setInputR12(event.target.value);
    };

    const handleR13 = (event) => {
        setInputR13(event.target.value);
    };

    const handleR14 = (event) => {
        setInputR14(event.target.value);
    };

    const handleR15 = (event) => {
        setInputR15(event.target.value);
    };

    const handleCPSR = (event) => {
        setInputCPSR(event.target.value);
    };

    var data = {};
    var reg = [];

    const onSend = () => {
        !isToggled
            ? (data = {
                  operation: selectedOperation,
                  registerDestination: {
                      label: selectedRegDestination,
                      value: 0,
                  },
              })
            : (data = {
                  operation: selectedOperation,
                  registerDestination: {
                      value: selectedImeDestination,
                  },
              });

        reg = [
            {
                label: "R0",
                value: inputR0,
            },
            {
                label: "R1",
                value: inputR1,
            },
            {
                label: "R2",
                value: inputR2,
            },
            {
                label: "R3",
                value: inputR3,
            },
            {
                label: "R4",
                value: inputR4,
            },
            {
                label: "R5",
                value: inputR5,
            },
            {
                label: "R6",
                value: inputR6,
            },
            {
                label: "R7",
                value: inputR7,
            },
            {
                label: "R8",
                value: inputR8,
            },
            {
                label: "R9",
                value: inputR9,
            },
            {
                label: "R10",
                value: inputR10,
            },
            {
                label: "R11",
                value: inputR11,
            },
            {
                label: "R12",
                value: inputR12,
            },
            {
                label: "R13",
                value: inputR13,
            },
            {
                label: "R14",
                value: inputR14,
            },
            {
                label: "R15",
                value: inputR15,
            },
            {
                label: "CPSR",
                value: inputCPSR,
            },
        ];

        Service.updateAllRegisters(reg).then((response) =>
            console.log(response)
        );
        Service.postOperation(data).then((response) => console.log(response));
    };

    useEffect(() => {
        if (selectedOperation.value === "B" || selectedOperation === "BX") {
            setIsToggled(true);
        }
    }, [selectedOperation]);

    return (
        <div>
            <Navbar />
            <div className="branchPage">
                <h1 className="instrucTitle-bp">Instruções de Desvio</h1>
                {selectedOperation.value === "BX" && (
                    <div className="imediate-switch-bp">
                        <p className="switch-label-bp">Imediato</p>
                        <Switch
                            isToggled={isToggled}
                            onToggle={() => setIsToggled(!isToggled)}
                            disabled={false}
                        />
                    </div>
                )}
                {selectedOperation.value === "BLX" && (
                    <div className="imediate-switch-bp">
                        <p className="switch-label-bp">Imediato</p>
                        <Switch
                            isToggled={isToggled}
                            onToggle={() => setIsToggled(!isToggled)}
                            disabled={false}
                        />
                    </div>
                )}
                <div className="dropdown-row-bp">
                    <Dropdown
                        className="dropdown-bp"
                        options={operation}
                        placeholder="Operação"
                        handleSelectedOptions={handleSelectedOperation}
                        selectedOption={selectedOperation}
                    />
                    {isToggled && (
                        <TextInput
                            placeholder="Imediato (0b binario, 0x hexa)"
                            handleTextInput={handleTextInput}
                        />
                    )}
                    {!isToggled && (
                        <Dropdown
                            className="dropdown-ap"
                            options={register}
                            placeholder="Primeiro Operando"
                            handleSelectedOptions={handleselectedRegDestination}
                            selectedOption={selectedRegDestination}
                        />
                    )}
                    <ButtonGo handleSend={onSend} />
                </div>
                <div>
                    <div className="left-div-bp">
                        {selectedOperation.value === "" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info="Selecione a instrução"
                            />
                        )}
                        {selectedOperation.value === "B" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch (B), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedImeDestination +
                                    ", porém sem armazenar o local onde foi realizado o desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                        {selectedOperation.value === "BL" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch and link (BL), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedImeDestination +
                                    ", armazenando o valor de retorno em R14. Uma vez que as instruções do desvio terminam de ser executadas, o programa volta para o valor armazenado em R14. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                        {selectedOperation.value === "BX" &&
                            (isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução acima selecionada de branch and exchange (BX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                        selectedImeDestination +
                                        ", porém sem armazenar o local onde foi realizado o desvio, assim como é feito no branch (B). A diferença é que é aceito tanto um imediato quanto um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução acima selecionada de branch and exchange (BX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                        selectedRegDestination.value +
                                        ", porém sem armazenar o local onde foi realizado o desvio, assim como é feito no branch (B). A diferença é que é apenas um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "BLX" &&
                            (isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução acima selecionada de branch and link (BLX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                        selectedImeDestination +
                                        ", armazenando o valor de retorno em R14. Uma vez que as instruções do desvio terminam de ser executadas, o programa volta para o valor armazenado em R14. Como no BX, a diferença é que é aceito tanto um imediato quanto um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução acima selecionada de branch and link (BLX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                        selectedRegDestination.value +
                                        ", armazenando o valor de retorno em R14. Uma vez que as instruções do desvio terminam de ser executadas, o programa volta para o valor armazenado em R14. A diferença é que é aceito tanto um imediato quanto um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                    </div>
                    <div className="right-div-bp">
                        <Registers
                            handleR0={handleR0}
                            handleR1={handleR1}
                            handleR2={handleR2}
                            handleR3={handleR3}
                            handleR4={handleR4}
                            handleR5={handleR5}
                            handleR6={handleR6}
                            handleR7={handleR7}
                            handleR8={handleR8}
                            handleR9={handleR9}
                            handleR10={handleR10}
                            handleR11={handleR11}
                            handleR12={handleR12}
                            handleR13={handleR13}
                            handleR14={handleR14}
                            handleR15={handleR15}
                            handleCPSR={handleCPSR}
                            disabled={isToggled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchPage;
