import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getDatabase, ref, get, child} from "firebase/database";
import app from '../../api/firebase';

const getShops = createAsyncThunk(
    "shops/getShops",
    async function(_, {rejectWithValue}) {
        const database = getDatabase(app);
        const dbRef = ref(database);
        try {
            const shops = await get(child(dbRef, "/shops"));
            return shops.val();
        } catch (error) {
            return rejectWithValue(error.code);
        };
    },
);

const initialState = {
    shops: {
        shop_1: {
            food_1: {
                cardDescription: "food_1_Description",
                cardHeader: "food_1_head",
                imgUrl: "",
                price: 2,
                productId: 1,
            },
            food_2: {
                cardDescription: "food_2_Description",
                cardHeader: "food_2_head",
                imgUrl: "",
                price: 1,
                productId: 2,
            },
            food_3: {
                cardDescription: "food_3_Description",
                cardHeader: "food_3_head",
                imgUrl: "",
                price: 2,
                productId: 3,
            },
        },
        shop_2: {
            food_4: {
                cardDescription: "food_4_Description",
                cardHeader: "food_4_head",
                imgUrl: "",
                price: 2,
                productId: 4,
            },
            food_5: {
                cardDescription: "food_5_Description",
                cardHeader: "food_5_head",
                imgUrl: "",
                price: 1,
                productId: 5,
            },
            food_6: {
                cardDescription: "food_6_Description",
                cardHeader: "food_6_head",
                imgUrl: "",
                price: 2,
                productId: 6,
            },
        },
    },
    activeShop: "shop_1"
};

const shopsSlice = createSlice({
    name: "shops",
    initialState,
    reducers: {
        changeActiveShop: (store, action) => {
            store.activeShop = action.payload;
        },
    },
    extraReducers: {
        [getShops.fulfilled]: (store, action) => {
            store.shops = action.payload;
            store.activeShop = Object.keys(action.payload)[0];
        },
    },
});

export {getShops};
export const {changeActiveShop} = shopsSlice.actions;
export default shopsSlice.reducer;