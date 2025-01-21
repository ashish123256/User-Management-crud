import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data";

// Transform user data to match required format
const transformUserData = (users) => {
    return users.map((user) => {
        const [firstName, ...lastNameParts] = user.name.split(" ");
        return {
            id: user.id,
            firstName: firstName || "",
            lastName: lastNameParts.join(" ") || "",
            email: user.email,
            department: user.company.name,
        };
    });
};

// Apply the transformation to userList
const transformedUserList = transformUserData(userList);

const userSlice = createSlice({
    name: 'users',
    initialState: transformedUserList, // Use transformed data
    reducers: {
        addUser: (state, action) => {
            console.log("Adding user:", action.payload);
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            console.log("Updating user with payload:", action.payload);
            const { id, firstName, lastName, email, department } = action.payload;
            const userIndex = state.findIndex((user) => user.id === Number(id));  // Convert id to number
        
            if (userIndex !== -1) {
                state[userIndex] = {
                    ...state[userIndex],
                    firstName,
                    lastName,
                    email,
                    department,
                };
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            return state.filter(user => user.id !== id);
        },
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
