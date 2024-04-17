import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./RootReducer";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


