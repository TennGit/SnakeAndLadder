const initialState = {
    rollNumber: 0,
    currentStep: 0,
}

const OVERTHEBOUNDARY = 999
const JUMPTONEXTCELL = 12
const FALLBACKTOCELL = 6

export default function goto(state = initialState, action) {
    const rollNumber = action.payload
    const currentStep = parseInt(state.currentStep, 10) + parseInt(rollNumber, 10)
    let currentStepShouldBe = 0
    if(currentStep < 21 && currentStep !== 3 && currentStep !== 15){
        currentStepShouldBe = currentStep
    } else if (currentStep < 21 && currentStep === 3) {
        currentStepShouldBe = JUMPTONEXTCELL
    } else if (currentStep < 21 && currentStep === 15){
        currentStepShouldBe = FALLBACKTOCELL
    } else {
        currentStepShouldBe = OVERTHEBOUNDARY
    }

    switch (action.type) {
        case 'roll': {
            return {
                rollNumber: currentStep < 21 ? rollNumber : 0 ,
                currentStep: currentStepShouldBe,
            }
        }
        default:
            return state
    }
}

export const setCurrentStep = (number) => ({
    type: 'roll',
    payload: number,
    meta: {},
    error: undefined,
})