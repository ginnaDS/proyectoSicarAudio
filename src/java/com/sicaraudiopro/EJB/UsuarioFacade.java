/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sicaraudiopro.EJB;

import com.sicaraudiopro.model.Usuario;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author ginna
 */
@Stateless
public class UsuarioFacade extends AbstractFacade<Usuario> implements UsuarioFacadeLocal {

    @PersistenceContext(unitName = "sicaraudioproPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }

    @Override
    public Usuario iniciarSesion(Usuario u) {
        Usuario uss=null;
        String Consulta;
        try {
            Consulta="FROM Usuario u WHERE u.nombreUsuario=?1 and u.contrasenia=?2";
            Query query = getEntityManager().createQuery(Consulta);
            query.setParameter(1, u.getNombreUsuario());
            query.setParameter(2, u.getContrasenia());
            List<Usuario> lista=query.getResultList();
            if (!lista.isEmpty()) {
                uss=lista.get(0);
                
            }
        } catch (Exception e) {
            throw e;
        }return uss;
    }

    
}
