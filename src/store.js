import React, {
    createContext,
    useContext,
    useReducer,
    useCallback,
} from 'react'
import {
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
} from '@terra-money/terra.js'

const StoreContext = createContext()

const initialState = {
    WEFundContractAddress: "terra14jvfsqdnpgn3tpkkcevarh0f832qrcpzsesfg0",
    projectData: '',
    oneprojectData: '',
    wallet: {},    
    allNativeCoins: [],
    config: {},
    ustBalance: 0,
    contractBalance: {},
    lcd_client: new LCDClient({
        URL: 'https://bombay-lcd.terra.dev/',
        chainID: 'bombay-12',
    }),
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setContractBalance' :
            return {
                ...state,
                contractBalance: action.message,
            }
        case 'setProjectdata' :
            return {
                ...state,
                projectData: action.message,
            }
        case 'setOneprojectdata':
            return {
                ...state,
                oneprojectData: action.message,
            }
        case 'setWallet' :
            return {
                ...state,
                wallet: action.message,
            }
        case 'setAllNativeCoins':
            return {
                ...state,
                allNativeCoins: action.message,
            }
        case 'setConfig':
            return {
                ...state,
                config: action.message,
            }
        case 'setUstBalance':
            return {
                ...state,
                ustBalance: action.message,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)
