#include "ImGui_DirectInput8.h"

void ImGui_DirectInput8_Init()
{
	LogFunction();
	ImGuiIO & io = ImGui::GetIO();
	io.KeyMap[ImGuiKey_Tab]        = DIK_TAB;
	io.KeyMap[ImGuiKey_LeftArrow]  = DIK_LEFT;
	io.KeyMap[ImGuiKey_RightArrow] = DIK_RIGHT;
	io.KeyMap[ImGuiKey_UpArrow]    = DIK_UP;
	io.KeyMap[ImGuiKey_DownArrow]  = DIK_DOWN;
	io.KeyMap[ImGuiKey_PageUp]     = DIK_PRIOR;
	io.KeyMap[ImGuiKey_PageDown]   = DIK_NEXT;
	io.KeyMap[ImGuiKey_Home]       = DIK_HOME;
	io.KeyMap[ImGuiKey_End]        = DIK_END;
	io.KeyMap[ImGuiKey_Insert]     = DIK_INSERT;
	io.KeyMap[ImGuiKey_Delete]     = DIK_DELETE;
	io.KeyMap[ImGuiKey_Backspace]  = DIK_BACK;
	io.KeyMap[ImGuiKey_Space]      = DIK_SPACE;
	io.KeyMap[ImGuiKey_Enter]      = DIK_RETURN;
	io.KeyMap[ImGuiKey_Escape]     = DIK_ESCAPE;
	io.KeyMap[ImGuiKey_A]          = DIK_A;
	io.KeyMap[ImGuiKey_C]          = DIK_C;
	io.KeyMap[ImGuiKey_V]          = DIK_V;
	io.KeyMap[ImGuiKey_X]          = DIK_X;
	io.KeyMap[ImGuiKey_Y]          = DIK_Y;
	io.KeyMap[ImGuiKey_Z]          = DIK_Z;
}

void ImGui_DirectInput8_UpdateKeyboard(byte * state)
{
	ImGuiIO & io = ImGui::GetIO();
	io.KeyCtrl  = ((state[DIK_LCONTROL] & 0x80) || (state[DIK_RCONTROL] & 0x80)) ? true : false;
	io.KeyShift = ((state[DIK_LSHIFT]   & 0x80) || (state[DIK_RSHIFT]   & 0x80)) ? true : false;
	io.KeyAlt   = ((state[DIK_LALT]     & 0x80) || (state[DIK_RALT]     & 0x80)) ? true : false;
	memset(io.KeysDown, 0, 256);
	for (uint32 i = 0; i < 256; i++)
	{
		if (state[i] & 0x80)
		{
			io.KeysDown[i] = true;
		}
	}
}

void ImGui_DirectInput8_UpdateMouse(HWND window, DIMOUSESTATE2 * state)
{
	if (!window)
	{
		return;
	}
	ImGuiIO & io = ImGui::GetIO();
	POINT pos = {};
	GetCursorPos(&pos);
	ScreenToClient(window, &pos);
	io.MousePos = ImVec2((float32)pos.x, (float32)pos.y);
	for (uint8 i = 0; i < 5; i++)
	{
		io.MouseDown[i] = state->rgbButtons[i] ? true : false;
	}
	io.MouseWheel += (float32)state->lZ / (float32)WHEEL_DELTA;
}
