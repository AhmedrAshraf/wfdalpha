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
    WEFundContractAddress: "terra1hsvqrzda46k80ca28h282dnhmr0k8eff3m9krz",
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

    investAmount: '',
    investWfdamount: '',
    investName: '',
    investEmail: '',
    investTitle: '',
    investDate: '',
    investSignature: '',
    request: 'http://localhost:3001',
    pdfFile: '',
    whitepaper: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setWhitepaper':
        return {
            ...state,
            whitepaper: action.message,
        }
    case 'setInvestDate':
        return {
            ...state,
            investDate: action.message,
        }
    case 'setInvestWfdamount':
        return {
            ...state,
            investWfdamount: action.message,
        }
    case 'setPdffile':
        return {
            ...state,
            pdfFile: action.message,
        }
    case 'setInvestname':
        return {
            ...state,
            investName: action.message,
        }
    case 'setInvestemail':
        return {
            ...state,
            investEmail: action.message,
        }
    case 'setInvesttitle':
        return {
            ...state,
            investTitle: action.message,
        }
    case 'setInvestsignature':
        return {
            ...state,
            investSignature: action.message,
        }        
    case 'setInvestamount':
        return {
            ...state,
            investAmount: action.message,
        }
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
