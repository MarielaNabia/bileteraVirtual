using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MiBilleteraWebApi.Models
{
    public partial class Pil2022Context : DbContext
    {
        public Pil2022Context(DbContextOptions options)
            : base(options)
        {
        }

        public virtual DbSet<Billetera> Billeteras { get; set; } = null!;
        public virtual DbSet<Moneda> Monedas { get; set; } = null!;
        public virtual DbSet<Operacion> Operaciones { get; set; } = null!;
        public virtual DbSet<TipoOperacion> TipoOperaciones { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Billetera>(entity =>
            {
                entity.HasKey(e => e.IdBilletera)
                    .HasName("PK_Billetera");

                entity.Property(e => e.IdBilletera).HasColumnName("ID_Billetera");

                entity.Property(e => e.IdMoneda).HasColumnName("ID_Moneda");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_Usuario");

                entity.Property(e => e.Saldo).HasColumnType("money");

                //entity.HasOne(d => d.IdMonedaNavigation)
                //    .WithMany(p => p.Billeteras)
                //    .HasForeignKey(d => d.IdMoneda)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Billetera_Monedas");

                //entity.HasOne(d => d.IdUsuarioNavigation)
                //    .WithMany(p => p.Billeteras)
                //    .HasForeignKey(d => d.IdUsuario)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Billetera_Usuario");
            });

            modelBuilder.Entity<Moneda>(entity =>
            {
                entity.HasKey(e => e.IdMoneda);

                entity.Property(e => e.IdMoneda).HasColumnName("ID_Moneda");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Tipo)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Operacion>(entity =>
            {
                entity.HasKey(e => e.IdOperacion)
                    .HasName("PK_Operacion");

                entity.Property(e => e.IdOperacion).HasColumnName("ID_Operacion");

                entity.Property(e => e.FechaOperacion)
                    .HasColumnType("datetime")
                    .HasColumnName("fechaOperacion")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdBilletera).HasColumnName("ID_Billetera");

                entity.Property(e => e.IdMoneda).HasColumnName("ID_Moneda");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("ID_TipoOperacion");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_Usuario");

                entity.Property(e => e.Monto)
                    .HasColumnType("money")
                    .HasColumnName("monto");

                //entity.HasOne(d => d.IdBilleteraNavigation)
                //    .WithMany(p => p.Operaciones)
                //    .HasForeignKey(d => d.IdBilletera)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Operacion_Billetera");

                //entity.HasOne(d => d.IdMonedaNavigation)
                //    .WithMany(p => p.Operaciones)
                //    .HasForeignKey(d => d.IdMoneda)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Operacion_Monedas");

                //entity.HasOne(d => d.IdTipoOperacionNavigation)
                //    .WithMany(p => p.Operaciones)
                //    .HasForeignKey(d => d.IdTipoOperacion)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Operacion_TipoOperacion");

                //entity.HasOne(d => d.IdUsuarioNavigation)
                //    .WithMany(p => p.Operaciones)
                //    .HasForeignKey(d => d.IdUsuario)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Operacion_Usuario");
            });

            modelBuilder.Entity<TipoOperacion>(entity =>
            {
                entity.HasKey(e => e.IdTipoOperacion)
                    .HasName("PK_TipoOperacion");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("ID_TipoOperacion");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.NombreOperacion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Nombre_Operacion");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK_Usuario");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_Usuario");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellido");

                entity.Property(e => e.Dni)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("dni");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FechaAlta)
                    .HasColumnType("datetime")
                    .HasColumnName("fechaAlta")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FechaBaja)
                    .HasColumnType("datetime")
                    .HasColumnName("fechaBaja");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
