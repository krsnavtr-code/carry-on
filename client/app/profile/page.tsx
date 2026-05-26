"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Mail,
  Phone,
  Lock,
  Save,
  ShieldCheck,
  Home,
  Eye,
  EyeOff,
  LogOut,
  Sparkles,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

export default function ProfilePage(): React.ReactElement {
  const router = useRouter();
  const { user, updateProfile, changePassword, logout } = useAuth();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profileError, setProfileError] = useState<string>("");
  const [profileLoading, setProfileLoading] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordLoading, setPasswordLoading] = useState<boolean>(false);
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
    setProfileError("");
  };

  const handleProfileSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProfileError("");
    setProfileLoading(true);

    try {
      await updateProfile(profileData.name, profileData.phone);
      setIsEditing(false);
    } catch (err: any) {
      setProfileError(err.message || "Profile update failed");
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
    setPasswordError("");
  };

  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordLoading(true);

    try {
      await changePassword(
        passwordData.currentPassword,
        passwordData.newPassword,
      );
      setPasswordData({ currentPassword: "", newPassword: "" });
    } catch (err: any) {
      setPasswordError(err.message || "Password change failed");
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  // Unauthenticated Hydration Fallback
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
        <div className="max-w-sm w-full text-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="w-12 h-12 bg-red-50 dark:bg-red-950/30 text-red-500 rounded-xl flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-black text-gray-900 dark:text-white">
              Terminal Access Denied
            </h3>
            <p className="text-xs text-gray-400 font-medium">
              Please login with legitimate secure credentials to access profile
              dashboard variables.
            </p>
          </div>
          <Link
            href="/auth/login"
            className="w-full inline-flex items-center justify-center bg-[#0C4587] text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-colors"
          >
            Authenticate Token Node
          </Link>
        </div>
      </div>
    );
  }

  // Generate User Name Initials dynamically for profile avatar placeholder
  const nameInitials = user.name
    ? user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "CU";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-200 transition-colors duration-300 py-6 relative overflow-hidden">
      {/* Structural Decorative Ambience Shaders */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0C4587]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* TOP LEVEL NAVIGATION HUB ACTION BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-900 pb-6">
          <div>
            <h1 className="text-xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white">
              Account Control Console
            </h1>
            <p className="text-xs font-bold  uppercase tracking-widest flex items-center mt-1">
              <Sparkles className="w-3 h-3 mr-1 text-[#5EBC23]" /> Profile
              Configuration
            </p>
          </div>

          <div className="flex items-center space-x-3 self-start sm:self-auto">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-all shadow-sm"
            >
              <Home className="w-3.5 h-3.5 text-[#0C4587]" />
              <span>System Home</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-100/50 dark:border-red-900/20 rounded-xl text-xs font-bold transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Terminate Session</span>
            </button>
          </div>
        </div>

        {/* MAIN LAYOUT TWO-COLUMN CONTAINER HOOK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
          {/* LEFT COLUMN: VISUAL ACCOUNT CARD OVERLAY (Takes 4 columns) */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-3xl p-3 md:p-6 text-center space-y-6 shadow-sm">
            <div className="space-y-4">
              {/* Dynamic Alphabet Avatar Shield Wrapper */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0C4587] to-[#0A3C73] text-white flex items-center justify-center text-2xl font-black mx-auto shadow-md shadow-blue-900/10 tracking-widest">
                {nameInitials}
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                  {user.name || "Carry-On Client"}
                </h2>
                <span className="inline-block mt-2 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 border-green-100/50 dark:border-green-900/20">
                  Active {user.role}
                </span>
              </div>
            </div>

            {/* Quick Informational Index Rows */}
            <div className="border-t border-gray-50 dark:border-gray-800/60 pt-4 text-left text-xs font-bold space-y-3">
              <div className="flex justify-between">
                <span>Registry Node:</span>
                <span className="text-gray-700 dark:text-gray-300 truncate max-w-[150px]">
                  {user.email}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Network Status:</span>
                <span className="text-[#5EBC23] flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#5EBC23] rounded-full mr-1.5 animate-pulse" />{" "}
                  Operational
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE SETTINGS TRACK PANEL (Takes 8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* UNIT CARD 1: PROFILE MANAGEMENT METRICS */}
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-3xl p-3 md:p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-50 dark:border-gray-800/60 pb-4">
                <h3 className="text-sm md:text-lg font-black text-gray-900 dark:text-white flex items-center tracking-tight">
                  <User className="w-4 h-4 mr-2 text-[#0C4587]" /> Identity
                  Configuration
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(!isEditing);
                    setProfileError("");
                  }}
                  className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-colors ${
                    isEditing
                      ? "bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-400 hover:text-gray-700"
                      : "bg-blue-50/50 dark:bg-blue-950/30 border-blue-100/30 dark:border-blue-900/30 text-[#0C4587] dark:text-blue-400 hover:text-[#5EBC23]"
                  }`}
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              <form onSubmit={handleProfileSubmit} className="space-y-4">
                {/* Horizontal Form Field Split Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black uppercase tracking-wider ">
                      Account Identity Title
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="name"
                        type="text"
                        required
                        value={profileData.name}
                        onChange={handleProfileChange}
                        disabled={!isEditing}
                        className={`w-full bg-gray-50 dark:bg-gray-950 text-sm border font-semibold rounded-xl pl-11 pr-4 py-3.5 focus:outline-none transition-all ${
                          isEditing
                            ? "focus:border-[#0C4587] text-gray-900 dark:text-white border-gray-200 dark:border-gray-800"
                            : "text-gray-400 cursor-not-allowed border-transparent"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black uppercase tracking-wider ">
                      Active Contact Link
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        disabled={!isEditing}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-gray-50 dark:bg-gray-950 text-sm border font-semibold rounded-xl pl-11 pr-4 py-3.5 focus:outline-none transition-all ${
                          isEditing
                            ? "focus:border-[#0C4587] text-gray-900 dark:text-white border-gray-200 dark:border-gray-800"
                            : "text-gray-400 cursor-not-allowed border-transparent"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {profileError && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-xs font-bold flex items-center">
                    ⚠️ {profileError}
                  </div>
                )}

                {isEditing && (
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={profileLoading}
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#0C4587] to-[#0A3C73] hover:from-[#5EBC23] hover:to-[#4CAF50] text-white text-xs uppercase tracking-widest font-black py-3.5 rounded-xl shadow-md shadow-blue-900/10 disabled:opacity-50 transition-all duration-300"
                    >
                      <Save className="w-4 h-4 mr-2" />{" "}
                      {profileLoading
                        ? "Updating Values..."
                        : "Commit Profiling Update"}
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* UNIT CARD 2: PASSWORD CONFIGURE TOKEN FRAME */}
            {/* <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-900 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-gray-50 dark:border-gray-800/60 pb-4">
                <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center tracking-tight">
                  <Lock className="w-4 h-4 mr-2 text-[#D48C3B]" /> Cryptographic
                  Key Mutation
                </h3>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black uppercase tracking-wider ">
                      Current Security Pass
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        required
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        className="w-full bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl pl-11 pr-12 py-3.5 focus:outline-none focus:border-[#0C4587] text-gray-800 dark:text-white transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0C4587]"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-black uppercase tracking-wider ">
                      Target New Pass Token
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        name="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        required
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full bg-gray-50 dark:bg-gray-950 text-sm border border-gray-100 dark:border-gray-800 rounded-xl pl-11 pr-12 py-3.5 focus:outline-none focus:border-[#0C4587] text-gray-800 dark:text-white transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0C4587]"
                      >
                        {showNewPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {passwordError && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-xs font-bold flex items-center">
                    ⚠️ {passwordError}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={passwordLoading}
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#D48C3B] to-[#b36f27] hover:from-[#0C4587] hover:to-[#0A3C73] text-white text-xs uppercase tracking-widest font-black py-3.5 rounded-xl shadow-md shadow-amber-900/10 disabled:opacity-50 transition-all duration-300"
                  >
                    <Lock className="w-4 h-4 mr-2" />{" "}
                    {passwordLoading
                      ? "Mutating Token Matrix..."
                      : "Execute Key Mutation"}
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>

        {/* REASSURANCE COMPLIANCE FOOTER INDEX */}
        <div className="flex items-center justify-center space-x-1.5 text-[10px] font-bold tracking-wider uppercase pt-4 border-t border-gray-100 dark:border-gray-900">
          <ShieldCheck className="w-4 h-4 text-[#5EBC23]" />
          <span>
            End-To-End Encrypted Session Variables Protected (AES-256 Node
            standard)
          </span>
        </div>
      </div>
    </div>
  );
}
