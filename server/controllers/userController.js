import userModel from "../modals/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("GetUserData: User ID:", userId); // Debug userId
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    console.error("GetUserData error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};