import { create } from 'zustand';
export const useStore = create((set) => ({
    productModalState:false,
    sidebarState:false,
    sidebarState:false,
    signedIn:false,
    num:"",
    openproductModal: () => set({productModalState: true}),
    closeproductModal: () => set({productModalState: false}),
    openSidebar: () => set({sidebarState: true}),
    closeSidebar: () => set({sidebarState: false}),
    openSearchbar: () => set({searchbarState: true}),
    closeSearchbar: () => set({searchbarState: false}),
    setSignedIn: () => set({signedIn: true}),
    setNum: (number) => set({num: number}),
}))