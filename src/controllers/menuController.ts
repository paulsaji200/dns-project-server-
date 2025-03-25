import { Request, Response } from 'express';
import { Menu } from '../models/menu';
import mongoose from 'mongoose';

export const createMenu = async (req: Request, res: Response) => {
    console.log("hited")
  try {
    const newMenu = new Menu(req.body);
    const savedMenu = await newMenu.save();
    res.status(201).json(savedMenu);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create menu' });
  }
};


export const getMenus = async (req: Request, res: Response) => {
    console.log("menu")
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menus' });
  }
};

//     try {
//       const { menuId, name, description, price } = req.body;
  
//       if (!mongoose.Types.ObjectId.isValid(menuId)) {
//         res.status(400).json({ error: 'Invalid menu ID' });
//         return;
//       }
  
//       if (!name || !description || !price) {
//         res.status(400).json({ error: 'All fields (menuId, name, description, price) are required' });
//         return;
//       }
  
//       const menu = await Menu.findById(menuId);
//       if (!menu) {
//         res.status(404).json({ error: 'Menu not found' });
//         return;
//       }
  
//       menu.items.push({ name, description, price });
//       const updatedMenu = await menu.save();
  
//       res.status(200).json({ message: 'Item added successfully', data: updatedMenu });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to add item' });
//     }
//   };
export const add = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.query; // Get menu ID from query params
      const { name, description, price } = req.body;
  
      if (!id || !mongoose.Types.ObjectId.isValid(id as string)) {
        res.status(400).json({ error: "Invalid or missing menu ID" });
        return;
      }
  
      if (!name || !description || !price) {
        res.status(400).json({
          error: "All fields (name, description, price) are required",
        });
        return;
      }
  
      const menu = await Menu.findById(id);
      if (!menu) {
        res.status(404).json({ error: "Menu not found" });
        return;
      }
  
      menu.items.push({ name, description, price });
      const updatedMenu = await menu.save();
  
      res.status(200).json({ message: "Item added successfully", data: updatedMenu });
    } catch (err) {
      res.status(500).json({ error: "Failed to add item" });
    }
  };
  

export const welcomeMessage = async (req: Request, res: Response) => {
    console.log("menu")
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menus' });
  }
};