import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as reducer from '../modules/goto'

const CardGame = ({ rollNumber, currentStep, setCurrentStep }) => (
    <TableContainer>
        <ControlGroup>
            <RollNumber htmlFor="rollNumber">{ rollNumber }</RollNumber>
            <button onClick={ () => {
                const rollResult = Math.floor(Math.random() * 6) + 1
                setCurrentStep(rollResult)
            } }>Roll your dice
            </button>
            { currentStep === 999
                ? <Label htmlFor="currentStep">Let's start next round, please refresh the page</Label>
                : <Label htmlFor="currentStep">Your are in step: { currentStep }</Label>
            }
        </ControlGroup>
        <Table>
            <tbody>
            <tr>
                <Td currentStep={ currentStep } cellValue="17">17</Td>
                <Td currentStep={ currentStep } cellValue="18">18</Td>
                <Td currentStep={ currentStep } cellValue="19">19</Td>
                <Td currentStep={ currentStep } cellValue="20">20</Td>
            </tr>
            <tr>
                <Td currentStep={ currentStep } cellValue="13">13</Td>
                <Td currentStep={ currentStep } cellValue="14">14</Td>
                <Td currentStep={ currentStep } cellValue="15">15</Td>
                <Td currentStep={ currentStep } cellValue="16">16</Td>
            </tr>
            <tr>
                <Td currentStep={ currentStep } cellValue="9">9</Td>
                <Td currentStep={ currentStep } cellValue="10">10</Td>
                <Td currentStep={ currentStep } cellValue="11">11</Td>
                <Td currentStep={ currentStep } cellValue="12">12</Td>
            </tr>
            <tr>
                <Td currentStep={ currentStep } cellValue="5">5</Td>
                <Td currentStep={ currentStep } cellValue="6">6</Td>
                <Td currentStep={ currentStep } cellValue="7">7</Td>
                <Td currentStep={ currentStep } cellValue="8">8</Td>
            </tr>
            <tr>
                <Td currentStep={ currentStep } cellValue="1">1</Td>
                <Td currentStep={ currentStep } cellValue="2">2</Td>
                <Td currentStep={ currentStep } cellValue="3">3</Td>
                <Td currentStep={ currentStep } cellValue="4">4</Td>
            </tr>
            </tbody>
        </Table>
    </TableContainer>
)

const RollNumber = styled.label`
    margin-right: 20px;
`

const ControlGroup = styled.div`
    margin-bottom: 10px;
`

const TableContainer = styled.div`
    margin: 200px;
`

const Td = styled.td`
    border: 1px solid black;
    ${({ currentStep, cellValue }) => currentStep === parseInt(cellValue, 10) && `
        background: gray;
        font-size: 20px;
    `} 
    
    ${({ cellValue }) => parseInt(cellValue, 10) === 3 && `
        color: green;
    `}
    
    ${({ cellValue }) => parseInt(cellValue, 10) === 15 && `
        color: red;
    `}
`

const Table = styled.table`
    padding: 10px;
    border: 1px solid black;
    width: 200px;
    height: 250px;
`

const Label = styled.label`
    display: block;
    margin-top: 10px;
`

const mapStateToProps = (state) => ({
    rollNumber: state.goto.rollNumber,
    currentStep: state.goto.currentStep,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentStep: (number) => {
        dispatch(reducer.setCurrentStep(number))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardGame)